import { Router } from 'express';
import CompanyController from './company.controller.js';

const routes = new Router();
routes.post('/', CompanyController.insert);

export default routes;
