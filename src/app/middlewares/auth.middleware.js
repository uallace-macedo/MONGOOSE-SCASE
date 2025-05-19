import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import envConfig from '../../configs/env.config.js';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).json({ error: 'Token not provided!' });

    const [, token] = authHeader.split(' ');
    try {
        const decoded = await promisify(jwt.verify) (token, envConfig.SECRET);
        req.idCompany = decoded.id;
        req.cnpjCompany = decoded.cnpj;

        return next();
    } catch {
        return res.status(401).json({ error: 'Invalid token!' });
    }
}