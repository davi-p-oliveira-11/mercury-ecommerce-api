import type { FastifyInstance } from "fastify";
import { createProductHandler, getProductsHandler } from "./product.controller.js";
import { createProductSchema, productResponseSchema } from "./product.schema.js";

async function productRoutes(server: FastifyInstance) {
     server.post(
         "/",
         {
           preHandler: [server.authenticate], 
           schema: {
             body: createProductSchema,
             response: {
                201: productResponseSchema,
             },
           },
         },
         createProductHandler
       );  
       
      server.get('/', 
      {
         schema: {
            response: {
               200: productResponseSchema,   
            }
         }
      }, 
      
      getProductsHandler
   );
}

export default productRoutes