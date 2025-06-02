import { z } from "zod/v4";

export const Foo = z.looseObject({
  dateTime: z.string(),
});

export const Bar = Foo.extend(z.looseObject({
  number: z.string()
}));