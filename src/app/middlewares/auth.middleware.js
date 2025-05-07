import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth.config.js';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if(!authHeader) return res.status(401).json({ error: 'Token not provided' });

  const [_, token] = authHeader.split(' ');
  try {
    const decoded = await promisify(jwt.verify) (token, authConfig.secret);
    req.idCompany = decoded.id;
    req.cnpjCompany = decoded.cnpj;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
