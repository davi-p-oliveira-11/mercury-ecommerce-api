import { z } from "zod";

const createUserSchema = z.object({
   email: z
     .string({
        error: "Email must be a string"
     })
     .email(),
   name: z.string(),
   password: z.string({
        error: "Password must be a string"
   })  
});

export type CreateUserInput = z.infer<typeof createUserSchema>