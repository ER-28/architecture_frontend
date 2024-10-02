import { z } from "zod";

const ColorSchema = z
	.object({
		bg_dark: z.string().optional(),
		bg_light: z.string().optional(),
		error: z.string().optional(),
		info: z.string().optional(),
		primary: z.string().optional(),
		secondary: z.string().optional(),
		success: z.string().optional(),
		warning: z.string().optional(),
	})
	.partial();

const DocumentTypeSchema = z.object({
	label: z.string(),
	value: z.string(),
});

const FooterLogoUrlSchema = z
	.object({
		guid: z.string(),
		loc_type: z.string(),
		location: z.string(),
		res_url: z.string(),
	})
	.partial();

export const PortalConfigurationSchema = z
	.object({
		background_image_url: z.string().optional(),
		colors: ColorSchema.optional().default({}),
		company_name: z.string().optional(),
		document_share_name_input_label: z.string().optional(),
		document_type_list: z.array(DocumentTypeSchema).optional().default([]),
		document_type_metafield: z.number().optional(),
		favicon_url: z.string().optional(),
		file_info: z.string().optional(),
		filtered_metafield_value: z
			.record(z.array(z.string()))
			.optional()
			.default({}),
		footer_logo_url: FooterLogoUrlSchema.optional(),
		guid: z.string().optional(),
		id: z.number().optional(),
		login_message: z.string().optional(),
		logo_url: z.string().optional(),
		welcome_message: z.string().optional(),
	})
	.partial();

export type PortalConfiguration = z.infer<typeof PortalConfigurationSchema>;
