import Post from '../models/Post';

class LikeController {
    async store(req, res) {
        const { postId } = req.params;

        const target = await Post.findById(postId);
        target.likes += 1;
        await target.save();

        req.io.emit('like', target);

        return res.json(target);
    }
}

export default new LikeController();
