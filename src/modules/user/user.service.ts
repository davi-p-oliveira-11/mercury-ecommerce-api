import prisma from "../../utils/prisma.js";
import type { CreateUserInput } from "./user.schema.js";

export async function createUser(input: CreateUserInput) {
   const user = await prisma.user.create({
     data: input,
   });   
}