import express from "express";
import catsRoutes from "./routes/cats.routes";
import healthRoutes from "./routes/health.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/generate";
import { ErrorMiddleware } from "./middleware/error.midleware";
import { env } from "./config/env";

const app = express();
app.use(express.json());

// Swagger setup
if (env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// Routes setup
app.use("/cats", catsRoutes);
app.use("/health", healthRoutes);

const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.handle.bind(errorMiddleware));

export default app;
