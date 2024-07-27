import axiosInstance from "../api";

class CommentService {
  async getCommentsById(id: string) {
    const response = await axiosInstance
      .get(`item/${id}.json`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (response.comments && response.comments_count !== undefined) {
      const result = {
        commentsCount: response.comments_count,
        comments: response.comments.map((item) => {
          return {
            id: item.id,
            user: item.user,
            comments: item.comments,
            commentsCount: item.comments_count,
            content: (item.content = item.content),
          };
        }),
      };
      return result;
    }
    return;
  }
}

export const commentService = new CommentService();
