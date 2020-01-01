import Post from '../models/Post';

class LikeController {
    async store(req, res) {
        const target = req.params.postId;
        console.log(target);
        return res.json({ ok: true });
    }
}

export default new LikeController();
