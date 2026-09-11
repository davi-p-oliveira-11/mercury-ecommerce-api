import Fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import fastifyJwt from "@fastify/jwt";
import userRoutes from "./modules/user/user.route.js";
import "dotenv/config";

import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

export const server = Fastify();

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
}

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET!,
});

server.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
   try {
    await request.jwtVerify();
   } catch (e) {
    return reply.send(e);
   }
})

server.get("/healthcheck", async function () {
  return { status: "OK"};    
})

async function main() {

   server.register(userRoutes, {prefix: 'api/users'});

   try {
     await server.listen({ port: 3000, host: '0.0.0.0'});
     
     console.log(`Server ready at http://localhost:3000`);
   } catch (e) {
      console.error(e);
      process.exit(1);
   }   
}

main();