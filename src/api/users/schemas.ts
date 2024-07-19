import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().max(100),
    email: z.string().email().max(100),
    password: z.string().max(255),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const userWithoutPasswordSchema =  userSchema.omit({ 
    password:true 
});

export const userUpdateSchema = userCreateSchema.partial();
