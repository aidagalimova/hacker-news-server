import axiosInstance from "api";

class NewsService {
  private async getNewsByPage(page: number) {
    const response = await axiosInstance
      .get(`newest/${page}.json`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  async getAllNews() {
    const result = await Promise.all([
      this.getNewsByPage(1),
      this.getNewsByPage(2),
      this.getNewsByPage(3),
      this.getNewsByPage(4),
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
  }

  getNewsById = async (id: string) => {
    const response = await axiosInstance
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
}

export const newsService = new NewsService();
