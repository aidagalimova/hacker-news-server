import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { useExpressServer } from "routing-controllers";
import { NewsController } from "controllers/NewsController";
import { CommentController } from "controllers/CommentController";

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
