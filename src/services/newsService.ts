import axiosInstance from "../api";

class NewsService {
  newsLimit = 100;
  pagesCount = 12;

  private async getNewsByPage(page: number) {
    const response = await axiosInstance.get(`newest/${page}.json`);
    return response.data;
  }

  async getAllNews() {
    try {
      let result = [];

      for (let page = 1; page <= this.pagesCount; page++) {
        const res = await this.getNewsByPage(page);
        result.push(...res);
        if (result.length > this.newsLimit) {
          break;
        }
      }
      result = result.slice(0, this.newsLimit).map((news) => ({
        id: news.id,
        title: news.title,
        points: news.points,
        user: news.user || "unknown",
        date: new Date(news.time * 1e3).toLocaleDateString(),
        timeAgo: news.time_ago,
      }));

      return result;
    } catch (e) {
      console.log(e);
    }
  }

  getNewsById = async (id: string) => {
    const response = (await axiosInstance.get(`item/${id}.json`)).data;

    if (response?.id) {
      const result = {
        id: response.id,
        title: response.title,
        points: response.points,
        user: response.user || "unknown",
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
