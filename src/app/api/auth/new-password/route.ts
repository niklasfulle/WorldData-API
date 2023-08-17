import { z } from "zod";

const newPasswordSchema = z.object({
  key: z.string().min(32, 'Invalid key').max(32, 'Invalid key'),
  email: z.string().email('Invalid email'),
  newPassword: z.string().min(5, 'Password should be minimum 5 characters'),
});

export async function POST(
  req: Request
) {
  try { } catch (error) { }
}