import { z } from "zod/v4";

export const MyObjectSchema = z.object({
  dateTime: z.iso.datetime(),
});