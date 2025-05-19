import Company from '../../modules/company/company.module.js';

export default async (req, res, next) => {
    const isAdmin = await Company.findById(req.idCompany).and({ admin: true });
    if(isAdmin) return next();

    return res.status(401).json({ error: 'Admin area!' });
}