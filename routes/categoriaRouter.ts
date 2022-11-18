import express  from 'express';
import categoriaController from '../controllers/categoriaController';
import validaToken from '../middlewares/validaToken';

const router = express.Router();

router.get('/', validaToken, categoriaController.list);
router.get('/:id', validaToken, categoriaController.selectCategoria);
router.post('/', validaToken, categoriaController.addCategoria);
router.put('/:id', validaToken, categoriaController.updateCategoria);
router.delete('/:id', validaToken, categoriaController.deleteCategoria);
router.get('/:id/videos', validaToken, categoriaController.selectVideosByCategoria);

export default router;