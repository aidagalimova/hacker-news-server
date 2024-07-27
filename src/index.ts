import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { useExpressServer } from "routing-controllers";
import { CommentController } from "./controllers/commentController";
import { NewsController } from "./controllers/NewsController";

dotenv.config();

const port = process.env.PORT || 4000;
const controllers = [NewsController, CommentController];

const app = express();

app.use(cors());

useExpressServer(app, {
  controllers,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
