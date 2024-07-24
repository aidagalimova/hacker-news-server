import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { getNewsById } from "./requests/getNewsById/getNewsById";
import { getAllNews } from "./requests/getAllNews/getAllNews";
import { getCommentsById } from "./requests/getCommentsById/getCommentsById";
const app: Express = express();
const port = process.env.PORT || 4000;

dotenv.config();

app.use(cors());

app.get("/", async (_req, res) => {
  const result = await getAllNews();
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/news/:id", async (req, res) => {
  const id = req.params.id;
  const result = await getNewsById(id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/comments/:id", async (req, res) => {
  const id = req.params.id;
  const result = await getCommentsById(id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
3;
