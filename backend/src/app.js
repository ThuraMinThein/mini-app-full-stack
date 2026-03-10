import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './modules/user/user.routes.js';
import productRoutes from './modules/product/product.routes.js';
import languageRoutes from './modules/language/language.router.js'
import { notFound } from './middlewares/notFount.middleware.js';
import { errorHandler } from './middlewares/errorHandling.middleware.js';
import { logging } from './middlewares/logging.middleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logging);

app.use('/v1/users', userRoutes);
app.use('/v1/products', productRoutes)
app.use('/v1/languages', languageRoutes)

app.use(notFound);
app.use(errorHandler)

export default app;