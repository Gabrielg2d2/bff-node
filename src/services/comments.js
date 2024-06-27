const { Client } = require("undici");

class CommentsService {
    #client;

    constructor() {
        this.#client = new Client("http://localhost:3002");
    }

    async getComments(postId = 0) {
        const response = await this.#client.request({
            method: "GET",
            path: "/comments",
            query: {
                postId,
            },
        });

        const data = await response.body.json();

        return data;
    }
}

module.exports = {
    CommentsService,
};
