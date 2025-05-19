import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import Company from './company.module.js';

class CompanyController {
    async insert(req, res) {
        const schema = Yup.object().shape({
            cnpj: Yup.number().required(),
            corporate_name: Yup.string().required().max(100),
            name: Yup.string().required().max(100),
            email: Yup.string().required().max(100).email(),
            password_hash: Yup.string().required().min(5),
            corporate_name: Yup.string().required().max(100),
            address: Yup.object().shape({
                street: Yup.string().required().max(100),
                zip_code: Yup.number().required(),
                city: Yup.string().required().max(50),
                state: Yup.string().required().max(2),
            }),
            address: Yup.object().shape({
                street: Yup.string().required().max(100),
                zip_code: Yup.number().required(),
                city: Yup.string().required().max(50),
                state: Yup.string().required().max(2),
            }),
            telephone: Yup.object().shape({
                commercial: Yup.number().required(),
                cellphone: Yup.number().required(),
            })
        });

        if(!(await schema.isValid(req.body))) return res.status(400).json({ error: 'Validation failed!' });
        const { cnpj, password_hash } = req.body;

        const company = await Company.findOne({ cnpj });
        if(company) return res.status(400).json({ error: 'Company already registered!' });

        req.body.password_hash = await bcrypt.hash(password_hash, 8);
        const companyData = await Company.create(req.body);

        return res.status(201).json(companyData);
    };

    async index (req, res) {
        const { page = 1 } = req.query;
        const companyData = await Company.paginate(
            {},
            {
                page,
                limit: 5,
                sort: { name: 'asc' },
                select: 'cnpj name email telephone.commercial'
            }
        )

        return res.json(companyData);
    }
}

export default new CompanyController();