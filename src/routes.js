import { Router } from 'express';
import multer from 'multer';

import uploadsConfig from './config/upload';
import PostController from './controllers/PostController';
import LikeController from './controllers/LikeController';

const routes = new Router();
const upload = multer(uploadsConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:postId/like', LikeController.store);

export default routes;
