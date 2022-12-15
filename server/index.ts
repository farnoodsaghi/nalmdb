import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("my express app");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
