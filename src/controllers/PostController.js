// import sharp from 'sharp';
// import path from 'path';
//  import fs from 'fs';

import Post from '../models/Post';

class PostController {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    }

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        /* await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(path.resolve(req.file.destination, 'resized', image)); */

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        });

        req.io.emit('post', post);

        return res.json(post);
    }
}

export default new PostController();
