import axiosInstance from "../../api";
import { FeedItem, News } from "../../types";

const getNewsByPage = async (page: number) => {
  const response: FeedItem[] = await axiosInstance
    .get(`newest/${page}.json`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getAllNews = async () => {
  const result = await Promise.all([
    getNewsByPage(1),
    getNewsByPage(2),
    getNewsByPage(3),
    getNewsByPage(4),
  ])
    .then((res) => {
      return res.flat().slice(0, 100);
    })
    .then((res) => {
      return res.map((news) => ({
        id: news.id,
        title: news.title,
        points: news.points,
        user: news.user,
        date: new Date(news.time * 1e3).toLocaleDateString(),
        timeAgo: news.time_ago,
      }));
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
