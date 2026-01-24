import { z } from "zod";

export const createCatSchema = z.object({
  name: z.string().min(2, "Name too short"),
  color: z.string().optional(),
  age: z.number().min(0, "Age must be positive"),
});

export type CreateCatInput = z.infer<typeof createCatSchema>;
