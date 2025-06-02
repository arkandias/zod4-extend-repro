import { z } from "zod/v4";

export const Foo = z.looseObject({
  a: z.string(),
});

export const Bar = Foo.extend(z.looseObject({
  b: z.string()
}));