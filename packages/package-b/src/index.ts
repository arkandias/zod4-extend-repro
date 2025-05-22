import { z } from "zod/v4";

export function myFunction<T extends z.ZodRawShape>(
  zodObject: z.ZodObject<T>
): z.ZodObject<T> {
  return zodObject;
}
