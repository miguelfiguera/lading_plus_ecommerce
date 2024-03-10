"use server";

import { Product, Cart } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addToCart(product: Product, cart: Cart) {
    const updateCart = await prisma.cart.update({
        where: { id: cart.id },
        data: {},//{ products: { connect: [{ id: product.id }] } },
    });
}

export async function removeFromCart(product: Product, cart: Cart) {
    const updateCart = await prisma.cart.update({
        where: { id: cart.id },
        data: {},//{ products: { disconnect: [{ id: product.id }] } },
    });
}
