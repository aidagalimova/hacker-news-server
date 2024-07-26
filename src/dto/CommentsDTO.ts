import { IsNumber, IsOptional, IsString, IsArray } from "class-validator";

class Comment {
  @IsNumber()
  id: number;

  @IsString()
  content: string;

  @IsNumber()
  comments_count: number;

  @IsArray()
  comments: Comment[];

  @IsString()
  @IsOptional()
  user: string | null;
}

export class CommentsResponseDTO {
  @IsNumber()
  commentsCount: number;

  @IsArray()
  comments: Comment[];
}
