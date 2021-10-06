import express, {Request, Response, Application} from 'express';
import { PORT } from './config';
import { userRouter } from './routes';

const app: Application = express();

app.use(express.json());

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello World');
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});