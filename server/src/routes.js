import { Router } from 'express';
import TarifaController from './app/controllers/TarifaController';

const routes = new Router();

routes.post('/tarifa', TarifaController.store);

export default routes;
