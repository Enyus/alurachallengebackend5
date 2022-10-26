import express  from 'express';
import videoController from '../controllers/videoController';

const router = express.Router();

router.get('/', videoController.list);
router.get('/:id', videoController.selectVideo);
router.post('/', videoController.addVideo);
router.put('/:id', videoController.updateVideo);
router.delete('/:id', videoController.deleteVideo);

export default router;