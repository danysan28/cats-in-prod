import { z } from "../docs/openapi";

export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1).openapi({
    example: 1,
    description: "Page number for pagination",
  }),
  limit: z.coerce.number().min(1).max(50).default(5).openapi({
    example: 2,
    description: "Number of items per page",
  }),
});

export const createCatSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .openapi({ example: "Whiskers", description: "Cat name" }),
  color: z.string().optional().openapi({
    example: "White",
    description: "Cat color",
  }),
  age: z
    .number()
    .min(0, "Age must be positive")
    .openapi({ example: 2, description: "Cat age in years" }),
});

export type CreateCatInput = z.infer<typeof createCatSchema>;
