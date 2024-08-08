import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createExpressServer, useExpressServer } from "routing-controllers";
import { CommentController } from "./controllers/CommentController";
import { NewsController } from "./controllers/NewsController";

dotenv.config();

const port = process.env.PORT ? +process.env.PORT : 4000;
const controllers = [NewsController, CommentController];

const app = createExpressServer({
  controllers,
  cors: true,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
