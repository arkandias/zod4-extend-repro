import { myFunction } from "package-b";
import { MyDateObjectSchema, MyCoercedObjectSchema } from "./schema.js";

export const iso = myFunction(MyDateObjectSchema);
export const coerce = myFunction(MyCoercedObjectSchema);
