"use server";

import { CartProduct, Cart, Product } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { createCartProduct } from "@/lib/CartProductCrud";

type initialCartProduct = {
    productId: number;
    quantity: number;
    cartId: number;
}

export async function addToCart(product: Product, CartProduct: initialCartProduct, cart: Cart) {
    try {
        const newCartProduct = await createCartProduct(CartProduct)

        if (newCartProduct) {
            return newCartProduct
        }

    }
    catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return e.code
        }
        if (e instanceof Error) {
            return e.message
        }
    }

 //   revalidatePath("/store");
}


export async function removeFromCart(){}