import { registry } from "../../registry";
import { paginationSchema } from "../../../schemas/cats.schema";

registry.registerPath({
  method: "get",
  path: "/cats",
  tags: ["Cats"],
  request: {
    query: paginationSchema,
  },
  responses: {
    200: {
      description: "Paginated cats retrieved successfully",
    },
  },
});
