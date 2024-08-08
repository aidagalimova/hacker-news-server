import { Response } from "express";
import {
  JsonController,
  Get,
  Param,
  Res,
  NotFoundError,
} from "routing-controllers";
import { ResponseSchema } from "routing-controllers-openapi";
import { NewsResponseDTO } from "../dto/NewsDTO";
import { newsService } from "../services/newsService";

@JsonController("/news")
export class NewsController {
  @Get("/")
  @ResponseSchema(NewsResponseDTO, { isArray: true })
  async getAllNews() {
    return newsService.getAllNews();
  }

  @Get("/:id")
  @ResponseSchema(NewsResponseDTO)
  async getNewsById(@Param("id") id: string, @Res() _res: Response) {
    const news = await newsService.getNewsById(id);
    if (!news) {
      throw new NotFoundError("Not found");
    }
    return news;
  }
}
