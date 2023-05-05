import { Router } from 'express';
import countercontroller from '../controllers/Counter';

const router = new Router();

// router.post('/', countercontroller.create);
router.get('/', countercontroller.show);
router.put('/', countercontroller.update);

export default router;
