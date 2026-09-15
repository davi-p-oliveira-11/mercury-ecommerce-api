import type { FastifyRequest } from "fastify";
import type { CreateProductInput } from "./product.schema.js";
import { createProduct, getProducts } from "./product.service.js";

export async function createProductHandler(request: FastifyRequest<{Body: CreateProductInput}>) {
    const product = await createProduct({
      ...request.body,
      owmnerId: request.user.id,
    });
    
    return product;
}

export async function getProductsHandler() {
  const products = await getProducts();

  return products;
}