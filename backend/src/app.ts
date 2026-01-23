import express from "express";
import catsRouter from "./routes/cats.routes";

const app = express();

app.use(express.json());
app.use("/cats", catsRouter);

export default app;
