import { z } from "zod";

export const DarkModeSchema = z.object({
	isDarkMode: z.boolean(),
});

export type DarkModeModel = z.infer<typeof DarkModeSchema>;

export const createDarkModeModel = (isDarkMode: boolean): DarkModeModel => {
	return DarkModeSchema.parse({ isDarkMode });
};
