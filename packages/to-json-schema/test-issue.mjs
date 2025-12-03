import { toJsonSchema } from "./dist/index.mjs";
import * as v from "valibot";

const schema = v.pipe(v.number(), v.integer(), v.minValue(1));

console.log(toJsonSchema(schema, { errorMode: "warn" }));
