const fastify = require("fastify");
const { PostController } = require("./controllers/posts");

const app = fastify({
    logger: true,
});

app.get("/posts", async (request, response) => {
    const postController = new PostController();
    const result = await postController.getPosts();
    return response.send(result);
});

app.get("/posts/:id", async (request, response) => {
    const postController = new PostController();
    const result = await postController.getPostById(request.params.id);
    return response.send(result);
});

app.listen(
    {
        port: 3333,
    },
    (error) => {
        if (error) throw error;
    }
);
