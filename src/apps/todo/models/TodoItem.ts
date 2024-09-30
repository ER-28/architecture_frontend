import { z } from "zod";

export const TodoItemSchema = z.object({
	id: z.string(),
	title: z.string().min(1).max(100),
	completed: z.boolean(),
});

export type TodoItemModel = z.infer<typeof TodoItemSchema>;
