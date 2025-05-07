import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Company from './company.model.js';

class CompanyController {
  async insert(req, res) {
    const schema = Yup.object().shape({
      cnpj: Yup.number().required(),
      corporate_name: Yup.string().required().max(100),
      name: Yup.string().required().max(100),
      email: Yup.string().required().max(100).email(),
      password_hash: Yup.string().required().max(8).min(6),
      address: Yup.object().shape({
        street: Yup.string().required().max(100),
        zip_code: Yup.number().required(),
        city: Yup.string().required().max(50),
        state: Yup.string().required().max(2),
      }),
      telephone: Yup.object().shape({
        commercial_phone: Yup.number().required(),
        cellphone: Yup.number().required(),
      })
    })

    if(!(await schema.isValid(req.body))) return res.status(400).json({ error: 'Validation fails!' });
    const { cnpj, password_hash } = req.body;

    const company = await Company.findOne({ cnpj });
    if(company) return res.status(401).json({ error: 'Company already exists!' });

    req.body.password_hash = await bcrypt.hash(password_hash, 8);

    const companyData = await Company.create(req.body);
    return res.status(201).json(companyData);
  }
}

export default new CompanyController();
