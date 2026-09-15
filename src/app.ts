import Fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import fastifyJwt from "@fastify/jwt";
import swagger from "fastify-swagger"
import type{ withRefResolver } from "fastify-zod"
import userRoutes from "./modules/user/user.route.js";
import productRoutes from "./modules/product/product.route.js";
/// import {version} from "../package.json"
import "dotenv/config";

import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { title } from "node:process";

export const server = Fastify();

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
}

declare module "fastify-jwt" {
  interface FastifyJWT {
    user: {
      id: number;
      email: string;
      name: string;
    }
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
  
  {/*
  server.register(
    swagger,
    withRefResolver({
      routePrefix: "/docs",
      exposeRoute: true,
      staticSCP: true,
      openapi: {
        info: {
          title: "MercuryApi",
          description: "APi for e-commerce",
          version: 1.0.0,
        },
      },
    })
  );
  */}

   server.register(userRoutes, {prefix: 'api/users'});
   server.register(productRoutes, {prefix: 'api/products'});

   try {
     await server.listen({ port: 3000, host: '0.0.0.0'});
     
     console.log(`Server ready at http://localhost:3000`);
   } catch (e) {
      console.error(e);
      process.exit(1);
   }   
}

main();