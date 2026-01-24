import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "./registry";

// Insert paths to be included in the OpenAPI spec
import "./paths";

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerSpec = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "Cats API 😺",
    version: "1.0.0",
    description: "API for managing cats in production",
  },
});
