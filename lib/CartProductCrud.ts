"use server";
import { prisma } from "@/lib/prisma";
import { Prisma, CartProduct } from "@prisma/client";

export async function createCartProduct(value: {
  productId: number;
  quantity: number;
  cartId: number;
}): Promise<CartProduct | null | String> {
  try {

    //check if cartProduct exists
    const existingCartProduct = await prisma.cartProduct.findFirst({
      where: {
        productId: value.productId,
        cartId: value.cartId,
        payed: false,
      },
    });

    //update cartProduct quantity if it exists
    if (existingCartProduct) {
      const update = await prisma.cartProduct.update({
        where: { id: existingCartProduct.id },
        data: { quantity: existingCartProduct.quantity + value.quantity },
      });

      return update;
    }
    //creates new cartProduct if it does not exist
    const newCartProduct = await prisma.cartProduct.create({
      data: {
        productId: value.productId,
        quantity: value.quantity,
        cartId: value.cartId,
      },
    });

    console.log(newCartProduct);

    if (!newCartProduct) {
      return null;
    }

    if (newCartProduct) {
      return newCartProduct;
    }
  } catch (e) {
    //handle errors
    console.log("CREATION FAILED");
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(e.code);
    }
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }

  return null;
}
