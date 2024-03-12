"use client";
import React, { useContext } from "react";
import { Product } from "@prisma/client";
import { addToCart } from "@/lib/prismaCartCRUD";
import { StoreContext } from "../storeComponents/ClientContainer";
import toast from "react-hot-toast";

type initialCartProduct = {
  productId: number;
  quantity: number;
  cartId: number;
};
export default function AddToCartButton({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const cart = useContext(StoreContext);
  const cartProduct: initialCartProduct = {
    productId: product.id,
    quantity: quantity,
    cartId: cart?.id as number,
  };

  const handleClick = async () => {
    if (cart) {
      try {
        const addingToCart = await addToCart(product, cartProduct, cart);
        toast.success("Item added to cart!");
      } catch (e: any) {
        toast.error(e);
      }
    }

    if (!cart) {
      toast.error("You must be logged to add items to cart!.");
    }
  };

  return (
    <button
      className="btn btn-primary"
      style={{ scale: "0.8" }}
      onClick={async () => handleClick()}
    >
      Add To Cart
    </button>
  );
}
