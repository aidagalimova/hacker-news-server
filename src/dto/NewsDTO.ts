import { IsNumber, IsOptional, IsString, IsDate, IsUrl } from "class-validator";

export class NewsResponseDTO {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsDate()
  date: Date;

  @IsNumber()
  timeAgo: number;

  @IsNumber()
  @IsOptional()
  points?: number | null;

  @IsNumber()
  @IsOptional()
  user: string;

  @IsUrl()
  @IsOptional()
  url?: string;
}
