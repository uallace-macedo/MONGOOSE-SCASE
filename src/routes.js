import { Router } from 'express';
import SessionController from './app/controllers/session.controller.js';

const routes = new Router();
routes.get('/', (req, res) =>  res.json({ status: 'Testing OK' }));

routes.post('/session', SessionController.session);

export default routes;