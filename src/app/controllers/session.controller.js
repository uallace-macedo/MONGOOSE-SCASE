import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';

import envConfig from '../../configs/env.config.js';
import Company from '../../modules/company/company.module.js';

class SessionController {
    async session(req, res) {
        const schema = Yup.object().shape({
            cnpj: Yup.number().required(),
            password: Yup.string().required().min(5)
        });

        console.log(req.body);
        if(!(await schema.isValid(req.body))) return res.status(400).json({ error: 'Validation fails' });
        
        const { cnpj, password } = req.body;
        const company = await Company.findOne({ cnpj });
        if(!company) return res.status(404).json({ error: 'Company not found' });

        const checkPassword = await bcrypt.compare(password, company.password_hash);
        if(!checkPassword) return res.status(401).json({ error: 'Invalid credentials' });

        const { id, name } = company;
        return res.json({
            id, name, cnpj,
            token: jwt.sign({ id, cnpj }, envConfig.SECRET, {
                expiresIn: envConfig.EXPIRES_IN
            })
        });
    }
}

export default new SessionController();