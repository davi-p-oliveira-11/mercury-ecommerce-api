import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

import { loginHandler, registerUserHandler } from "./user.controller.js";
import { createUserSchema, loginResponseSchema, loginSchema } from "./user.schema.js";
import { createUserResponseSchema } from "./user.schema.js"

async function userRoutes(server: FastifyInstance) {
  server
    .withTypeProvider<ZodTypeProvider>()
    .post(
      "/",
      {
        schema: {
          body: createUserSchema,
          response: {
             201: createUserResponseSchema,
          },
        },
      },
      registerUserHandler,
    );

  server.post('/login', {
    schema: {
      body: loginSchema,
      response: {
        200: loginResponseSchema
      },
    }
  }, loginHandler)  
}

export default userRoutes;

