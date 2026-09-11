import { z } from "zod";

const userCore = {
   email: z
   .string({
      error: "Email must be a string"
   })
   .email(),
   name: z.string(),
};

export const createUserSchema = z.object({
   ...userCore,
   id: z.number(),
   password: z.string({
      error: "Password must be a string"
   }),  
});

export const loginSchema = z.object({
   email: z
   .string({
      error: "Email must be a string"
   })
   .email(),
   password: z.string(),

})

export const loginResponseSchema = z.object({
   accessToken: z.string(),
})

export const createUserResponseSchema = z.object({
   id: z.number(),
   ...userCore,   
})

export type CreateUserInput = z.infer<typeof createUserSchema>

export type LoginInput = z.infer<typeof loginSchema>

