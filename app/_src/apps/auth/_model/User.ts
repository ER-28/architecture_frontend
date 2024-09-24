import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  role: z.enum(['user', 'admin']).default('user'),
});

export type UserModel = z.infer<typeof UserSchema>;