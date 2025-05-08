import { Router } from 'express';
import CompanyController from './company.controller.js';
import authMiddleware from '../../app/middlewares/auth.middleware.js';
import adminMiddleware from '../../app/middlewares/admin.middleware.js';

const routes = new Router();
routes.get('/', authMiddleware, adminMiddleware, CompanyController.index);
routes.get('/:id_company', authMiddleware, adminMiddleware, CompanyController.details);

routes.post('/', CompanyController.insert);

routes.put('/', authMiddleware, CompanyController.updateCompany);
routes.put('/:id_company', authMiddleware, adminMiddleware, CompanyController.updateCompanyStatus);

export default routes;
