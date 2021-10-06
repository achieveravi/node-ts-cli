import { Request, Response, Router } from 'express';
import { userController } from '../../controllers';

export const router = Router({
    strict: true
});

router.get('/', (req: Request, res: Response) => {
    userController.read(req, res);
});