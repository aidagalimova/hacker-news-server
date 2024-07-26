import { Response } from "express";
import { JsonController, Get, Param, Res } from "routing-controllers";
import { ResponseSchema } from "routing-controllers-openapi";
import { NewsResponseDTO } from "dto/NewsDTO";
import { newsService } from "services/newsService";
import "reflect-metadata";

@JsonController("/news")
export class NewsController {
  @Get("/")
  @ResponseSchema(NewsResponseDTO, { isArray: true })
  async getAllNews() {
    return newsService.getAllNews();
  }

  @Get("/:id")
  @ResponseSchema(NewsResponseDTO)
  async getNewsById(@Param("id") id: string, @Res() res: Response) {
    const news = await newsService.getNewsById(id);
    if (!news) {
      return res.status(404).send("Not found");
    }
    return res.json(news);
  }
}
