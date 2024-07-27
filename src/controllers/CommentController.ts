import { Response } from "express";
import { JsonController, Get, Param, Res } from "routing-controllers";
import { commentService } from "../services/commentsService";
import "reflect-metadata";
import { ResponseSchema } from "routing-controllers-openapi";
import { CommentsResponseDTO } from "../dto/CommentsDTO";

@JsonController("/comments")
export class CommentController {
  @Get("/:id")
  @ResponseSchema(CommentsResponseDTO)
  async getCommentsById(@Param("id") id: string, @Res() res: Response) {
    const comments = await commentService.getCommentsById(id);
    if (!comments) {
      return res.status(404).send("Not found");
    }
    return res.json(comments);
  }
}
