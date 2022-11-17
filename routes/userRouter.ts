import express  from 'express';
import userController from '../controllers/userController';
import validaToken from '../middlewares/validaToken';

const router = express.Router();

router.get('/', validaToken, userController.list);
router.post('/login', userController.login);

export default router;