import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';

const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);

export { routes };
