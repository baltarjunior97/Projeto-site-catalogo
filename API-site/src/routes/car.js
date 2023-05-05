import { Router } from 'express';
import carcontroller from '../controllers/Car';
import loginRequired from '../middlewares/loginRequired'; // eslint-disable-line

const router = new Router();

router.get('/', carcontroller.index);
router.get('/:id', carcontroller.show);
router.post('/', loginRequired, carcontroller.create);
router.put('/:id', loginRequired, carcontroller.update);
router.delete('/:id', loginRequired, carcontroller.delete);

export default router;
