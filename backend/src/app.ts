import express from "express";
import catsRoutes from "./routes/cats.routes";
import healthRoutes from "./routes/health.routes";
import { ErrorMiddleware } from "./middleware/error.midleware";

const app = express();
app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/health", healthRoutes);

const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.handle.bind(errorMiddleware));

export default app;
