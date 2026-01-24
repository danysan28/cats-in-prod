import { registry } from "../registry";
import { createCatSchema } from "../../schemas/cats.schema";

registry.register("CreateCatInput", createCatSchema);

registry.registerPath({
  method: "post",
  path: "/cats",
  tags: ["Cats"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createCatSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Cat created successfully",
    },
    400: {
      description: "Validation error",
    },
  },
});
