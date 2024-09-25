import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  completed: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;
