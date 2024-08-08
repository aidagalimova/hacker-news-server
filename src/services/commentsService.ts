import axiosInstance from "../api";

class CommentService {
  private formatComments(comments) {
    return comments.map((item) => {
      return {
        id: item.id,
        user: item.user || "unknown",
        comments: item.comments ? this.formatComments(item.comments) : [],
        commentsCount: item.comments_count,
        content: item.content,
      };
    });
  }

  async getCommentsById(id: string) {
    try {
      const response = (await axiosInstance.get(`item/${id}.json`)).data;
      if (response.comments && response.comments_count !== undefined) {
        const result = {
          commentsCount: response.comments_count,
          comments: this.formatComments(response.comments),
        };
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const commentService = new CommentService();
