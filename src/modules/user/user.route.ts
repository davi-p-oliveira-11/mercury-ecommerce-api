import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

import { registerUserHandler } from "./user.controller.js";
import { createUserSchema } from "./user.schema.js";
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
}

export default userRoutes;

