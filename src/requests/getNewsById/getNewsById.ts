import axiosInstance from "../../api";
import { Item } from "../../types";

export const getNewsById = async (id: string) => {
  const response: Item = await axiosInstance
    .get(`item/${id}.json`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  if (response?.id) {
    const result = {
      id: response.id,
      title: response.title,
      points: response.points,
      user: response.user,
      date: new Date(response.time * 1e3).toLocaleDateString(),
      timeAgo: response.time_ago,
      url: response.url,
    };
    return result;
  }
  return;
};
