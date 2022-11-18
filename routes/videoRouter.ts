import express  from 'express';
import videoController from '../controllers/videoController';
import validaToken from '../middlewares/validaToken';

const router = express.Router();

router.get('/free', videoController.listFree);
router.get('/', validaToken, videoController.list);
router.get('/:id', validaToken, videoController.selectVideo);
router.post('/', validaToken, videoController.addVideo);
router.put('/:id', validaToken, videoController.updateVideo);
router.delete('/:id', validaToken, videoController.deleteVideo);

export default router;