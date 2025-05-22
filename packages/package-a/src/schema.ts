import { z } from "zod/v4";

export const MyDateObjectSchema = z.object({
  dateTime: z.iso.datetime(),
});

export const MyCoercedObjectSchema = z.object({
  number: z.coerce.number()
});