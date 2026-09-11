import type { FastifyReply, FastifyRequest } from "fastify";
import { createUser, findUserByEmail, findUsers } from "./user.service.js";
import type { CreateUserInput, LoginInput } from "./user.schema.js";
import { verifyPassword } from "../../utils/hash.js";
import { server } from "../../app.js";

export async function registerUserHandler(request: FastifyRequest<{Body: CreateUserInput}>, reply: FastifyReply) {
    const body = request.body;
    
    try {
      const user = await createUser(body);

      return reply.code(201).send(user);
    } catch (e) {
      console.log(e);
      return reply.code(500).send(e);
    }
}

export async function loginHandler(request: FastifyRequest<{Body: LoginInput}>, reply: FastifyReply) {
    
   const body = request.body

   // find user by email
   const user = await findUserByEmail(body.email);

   if (!user) {
     return reply.code(401).send({
       message: "Invalid email or password"
     });
   }

   // verify password
   const correctPassword = verifyPassword({
     candidatePassword: body.password,
     salt: user.salt,
     hash: user.password
   });

   if(correctPassword) {
       const {password, salt, ...rest} = user
       // generate acess token
       return {acessToken: server.jwt.sign(rest)}
   }

   // response
   return reply.code(401).send({
      message: "Invalid email or password",
   })
}

export async function getUsersHandler() {
  const users = await findUsers();

  return users;
}