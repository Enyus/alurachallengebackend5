import express  from 'express';
import videoController from '../controllers/videoController';

const router = express.Router();

router.post('/', videoController.addVideoForApi);
router.get('/', videoController.list); // vai ser acessado pela função getAll do front, depois tenho que ver onde essa função getAll é chamada

export default router;