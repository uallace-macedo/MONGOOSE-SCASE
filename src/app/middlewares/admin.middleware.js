import Company from '../../modules/company/company.model.js';

export default async (req, res, next) => {
  const isAdmin = await Company.findById(req.idCompany).and({
    admin: true
  });

  if(!isAdmin) return res.status(403).json({ error: 'You must be an admin!' });
  next();
}
