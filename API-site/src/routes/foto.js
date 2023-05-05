import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import fotocontroller from '../controllers/Foto';

const router = new Router();

router.post('/', loginRequired, fotocontroller.create);

export default router;
