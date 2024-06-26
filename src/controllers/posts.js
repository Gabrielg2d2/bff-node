export class PostController {
  constructor(postService) {
    this.postService = postService;
  }

  async getPosts() {
    return {
      posts: [
        {
          id: 1,
          title: "Post 1",
          content: "Content 1",
        },
        {
          id: 2,
          title: "Post 2",
          content: "Content 2",
        },
      ],
    };
  }

  async getPostById(id) {
    return {
      id,
      title: "Post 1",
      content: "Content 1",
    };
  }
}
