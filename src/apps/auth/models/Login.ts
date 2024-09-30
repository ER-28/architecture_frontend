import {z} from "zod";

export const LoginSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(50),
  created_at: z.string(),
})

export type LoginModel = z.infer<typeof LoginSchema>;