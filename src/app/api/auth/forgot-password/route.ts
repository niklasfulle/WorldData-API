import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email'),
});

export async function POST(
  req: Request
) {
  try { } catch (error) { }
}
