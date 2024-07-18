import { z } from "zod";
import { accountCreateSchema } from "../account/schemas";

export const sessionLoginSchema = accountCreateSchema.pick({
    email: true,
    password: true,
});