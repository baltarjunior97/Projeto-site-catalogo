import { Router } from 'express';
import tokencontroller from '../controllers/Token';

const router = new Router();

router.post('/', tokencontroller.create);

export default router;
