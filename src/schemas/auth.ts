import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
});
export type AuthSchema = z.infer<typeof authSchema>;

export const confirmationSchema = z.object({
  code: z.string().length(6),
  confirmEmail: z.string().email(),
});
export type ConfirmationSchema = z.infer<typeof confirmationSchema>;
