import z from 'zod';

export const carSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().max(100),
    description: z.string().optional(),
    brand: z.string().max(100),
    year: z.number(),
    km: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.number().positive().int(),
});

export const carCreateSchema = carSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,

});

export const carUpdateSchema = carCreateSchema.partial();