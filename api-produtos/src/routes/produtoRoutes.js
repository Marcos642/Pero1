import { Router } from 'express';
import produtoController from '../controllers/ProdutoController';

const route = new Router();

route.get('/', produtoController.findall);
route.post('/', produtoController.create);
route.get('/:id', produtoController.findbyId);
route.delete('/:id', produtoController.delete);
route.put('/:id', produtoController.update);
export default route;
