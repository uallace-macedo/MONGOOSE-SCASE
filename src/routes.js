import { Router } from 'express';
import SessionController from './app/controllers/session.controller.js';
import authMiddleware from './app/middlewares/auth.middleware.js';

const routes = new Router();

routes.post('/session', SessionController.session);

routes.use(authMiddleware); // All routes below require authentication
routes.get('/', (req, res) =>  res.json({ idCompany: req.idCompany, cnpjCompany: req.cnpjCompany }));

export default routes;