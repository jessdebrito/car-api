import { z } from "zod";
import { accountCreateSchema, accountSchema } from "./schemas";

export type Account = z.infer<typeof accountSchema>
export type accountCreate = z.infer<typeof accountCreateSchema>