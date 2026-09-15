import { z } from 'zod'

const productInput = {
   title: z.string(),
   price: z.number(),
   content: z.string().optional(),
}

const productGenerated = {
   id: z.number(),
   createdAt: z.string(),
   updatedAt: z.string(),
}

export const createProductSchema = z.object({
   ...productInput,   
});

export const productResponseSchema = z.object({
   ...productInput,
   ...productGenerated,   
});

export const productsResponseSchema = z.array(productResponseSchema);

export type CreateProductInput = z.infer<typeof createProductSchema>;