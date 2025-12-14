import { z } from "zod";

export const imageUploadSchema = z.object({
  params: z.object({
    eventId: z.string().transform(Number),
  }),
});