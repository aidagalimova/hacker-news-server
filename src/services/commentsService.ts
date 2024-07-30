import axiosInstance from "../api";

class CommentService {
  async getCommentsById(id: string) {
    try {
      const response = (await axiosInstance.get(`item/${id}.json`)).data;
      if (response.comments && response.comments_count !== undefined) {
        const result = {
          commentsCount: response.comments_count,
          comments: response.comments.map((item) => {
            return {
              id: item.id,
              user: item.user || "unknown",
              comments: item.comments,
              commentsCount: item.comments_count,
              content: (item.content = item.content),
            };
          }),
        };
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const commentService = new CommentService();
