import { z } from "zod";
import { accountCreateSchema } from "../users/schemas";

export const sessionLoginSchema = accountCreateSchema.pick({
    email: true,
    password: true,
});