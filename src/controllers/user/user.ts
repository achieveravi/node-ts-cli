import { Request, Response } from 'express';
import { CrudController } from '../crud-controller';

export class UserController extends CrudController {
    public read(req: Request, res: Response): void {
        res.json({message: `hello ${req.query.name}`});
    }
}