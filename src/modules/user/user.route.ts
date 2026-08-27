import type { FastifyInstance } from "fastify";
import { registerUserHandler } from "./user.controller.js";

async function userRoutes(server: FastifyInstance) {
  server.post("/", registerUserHandler);    
}

export default userRoutes;