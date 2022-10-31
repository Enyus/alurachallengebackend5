import express  from 'express';
import categoriaController from '../controllers/categoriaController';

const router = express.Router();

router.get('/', categoriaController.list);

export default router;