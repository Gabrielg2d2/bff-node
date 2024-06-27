const { PostsService } = require("../services/posts");
const { CommentsService } = require("../services/comments");

const postService = new PostsService();
const commentsService = new CommentsService();
class PostController {
    async getPosts() {
        const posts = await postService.getPosts();
        return posts;
    }

    async getPostById(id) {
        const [post, comments] = await Promise.all([
            postService.getPostById(id),
            commentsService.getComments(id),
        ]);

        return {
            ...post,
            comments,
        };
    }
}

module.exports = {
    PostController,
};
