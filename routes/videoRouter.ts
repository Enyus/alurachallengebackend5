import express  from 'express';
import videoController from '../controllers/videoController';

const router = express.Router();

router.get('/', videoController.list);

export default router;