import { Router } from 'express';
import multer from 'multer';

import uploadsConfig from './config/upload';
import PostController from './controllers/PostController';

const routes = new Router();
const upload = multer(uploadsConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

export default routes;
