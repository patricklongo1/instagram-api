import express from 'express';
import mongoose from 'mongoose';
import { resolve } from 'path';
import cors from 'cors';

import routes from './routes';

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(express.json());
app.use(
    '/files',
    express.static(resolve(__dirname, '..', 'uploads', 'resized'))
);
app.use(routes);
app.listen(3333);
