import { z } from 'zod';
import {UserSchema} from "@/app/(apps)/auth/_model/User";

export const LoginInputSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(100),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;

export const AuthResponseSchema = z.object({
  user: UserSchema,
  token: z.string(),
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;