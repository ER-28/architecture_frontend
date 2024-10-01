import { z } from "zod";

const BaseToastSchema = z.object({
	title: z.string(),
	description: z.string().optional().default(""),
	status: z
		.enum(["success", "error", "warning", "info"])
		.optional()
		.default("info"),
	duration: z.number().optional().default(3000),
	isClosable: z.boolean().optional().default(true),
	isAutoDismiss: z.boolean().optional().default(true),
	position: z
		.enum([
			"top-left",
			"top-center",
			"top-right",
			"bottom-left",
			"bottom-center",
			"bottom-right",
		])
		.optional()
		.default("bottom-right"),
});

export const ToastSchema = BaseToastSchema.extend({
	id: z.string(),
});

export type ToastModel = z.infer<typeof ToastSchema>;
export type BaseToastModel = z.infer<typeof BaseToastSchema>;
