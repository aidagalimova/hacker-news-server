import axiosInstance from "../../api";
import { Item } from "../../types";

export const getCommentsById = async (id: string) => {
  const response: Item = await axiosInstance
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
};
