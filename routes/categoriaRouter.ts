import express  from 'express';
import categoriaController from '../controllers/categoriaController';

const router = express.Router();

router.get('/', categoriaController.list);
router.get('/:id', categoriaController.selectCategoria);
router.post('/', categoriaController.addCategoria);
router.put('/:id', categoriaController.updateCategoria);

export default router;