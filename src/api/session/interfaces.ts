import { z } from "zod";
import { sessionLoginSchema } from "./schemas";

export type SessioinLogin = z.infer<typeof sessionLoginSchema>;