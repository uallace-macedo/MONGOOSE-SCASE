import { Router } from 'express';

const routes = new Router();
routes.get('/', (req, res) =>  res.json({ status: 'Testing OK' }));

export default routes;