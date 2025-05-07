import { Router } from 'express';

import companyRoutes from './modules/company/company.routes.js';
import authMiddleware from './app/middlewares/auth.middleware.js';
import SessionController from './app/controllers/session.controller.js';

const routes = new Router();
routes.post('/session', SessionController.session);
routes.use('/company', companyRoutes);

// authentication required
routes.use(authMiddleware);

export default routes;
