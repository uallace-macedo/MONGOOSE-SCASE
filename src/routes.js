import { Router } from 'express';

import SessionController from './app/controllers/session.controller.js';

const routes = new Router();
routes.post('/session', SessionController.session);

export default routes;
