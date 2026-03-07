import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './modules/user/user.routes.js';
import { notFound } from './middlewares/notFount.middleware.js';
import { errorHandler } from './middlewares/errorHandling.middleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1/users', userRoutes);

app.use(notFound);
app.use(errorHandler)

export default app;