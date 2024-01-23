import { z } from 'zod';

export const sendMessageSchema = z.object({
  input: z.string(),
  senderId: z.string().cuid(),
  receiverId: z.string().cuid(),
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;
