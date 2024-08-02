import { Response } from "express";
import {
  JsonController,
  Get,
  Param,
  Res,
  NotFoundError,
} from "routing-controllers";
import { commentService } from "../services/commentsService";
import { ResponseSchema } from "routing-controllers-openapi";
import { CommentsResponseDTO } from "../dto/CommentsDTO";

@JsonController("/comments")
export class CommentController {
  @Get("/:id")
  @ResponseSchema(CommentsResponseDTO)
  async getCommentsById(@Param("id") id: string, @Res() _res: Response) {
    const comments = await commentService.getCommentsById(id);
    if (!comments) {
      throw new NotFoundError("Not found");
    }
    return comments;
  }
}
