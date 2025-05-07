import { Router } from 'express';
import authMiddleware from './app/middlewares/auth.middleware.js';

import SessionController from './app/controllers/session.controller.js';

const routes = new Router();
routes.post('/session', SessionController.session);

routes.use(authMiddleware);
routes.get('/test', (req, res) => {
  res.status(200).json({ cnpj: req.cnpjCompany, id: req.idCompany });
})

export default routes;
