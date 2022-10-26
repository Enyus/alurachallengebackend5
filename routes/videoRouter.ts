import express  from 'express';
import videoController from '../controllers/videoController';

const router = express.Router();

router.get('/', videoController.list);
router.get('/:id', videoController.selectVideo);
router.post('/', videoController.addVideo);

export default router;