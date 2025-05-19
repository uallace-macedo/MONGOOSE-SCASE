import { Router } from 'express';
import SessionController from './app/controllers/session.controller.js';
import authMiddleware from './app/middlewares/auth.middleware.js';
import adminMiddleware from './app/middlewares/admin.middleware.js';
import CompanyController from './modules/company/company.controller.js';

const routes = new Router();

routes.post('/session', SessionController.session);
routes.post('/company', CompanyController.insert);

routes.use(authMiddleware); // All routes below require authentication

routes.get('/', (req, res) =>  res.json({ idCompany: req.idCompany, cnpjCompany: req.cnpjCompany }));

routes.use(adminMiddleware); // Admin routes
routes.get('/company', CompanyController.index);

export default routes;