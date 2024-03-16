"use client";
import React, { useState, useEffect, createContext } from "react";
import StoreSideBar from "@/components/storeComponents/StoreSideBar";
import ItemCard from "./ItemCard";
import {
  validateSession,
  getUserSession,
} from "@/lib/SessionActions/SessionActions";
import { getAllProducts, getUserCart } from "@/lib/prismaQueries";
import { Product, Cart } from "@prisma/client";
import { logAction } from "@/lib/ServerLogAction";

export const StoreContext = createContext<Cart | null>(null);

type Categories = string[];

export default function ClientContainer() {
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categories>([]);
  const [activeCategories, setActiveCategories] = useState<String>("All");
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    async function setStates() {
      let categories: string[] = [];
      const session = await validateSession();
      if (session) {
        setActive(true);
      }

      const products: any = await getAllProducts();

      if (products instanceof Array && products.length > 0) {
        setProducts(products);
        categories = products
          .map((product: Product) => {
            return (
              product.category[0].toUpperCase() + product.category.slice(1)
            );
          })
          .sort();
        setCategories(categories);
      }

      const user = await getUserSession();
      if (user) {
        const cart = await getUserCart(user.user.id);
        setCart(cart);
      }
    }

    setStates();
  }, []);

  const FilteredItems = products
    .filter((product: Product) => {
      return product.category === activeCategories;
    })
    .map((product: Product) => {
      return <ItemCard key={product.id} product={product} />;
    });

  const items = products.map((product: Product) => {
    return <ItemCard key={product.id} product={product} />;
  });

  const handleCategory = (value: string) => {
    setActiveCategories(value);
  };

  return (
    <StoreContext.Provider value={cart}>
      <div>
        {" "}
        <div className="container-fluid">
          <h1 className="text-center fs-2 my-4 text-decoration-underline">
            Store
          </h1>
          <div className="row">
            <div className="col-3">
              {categories.length > 0 && (
                <StoreSideBar
                  active={active}
                  categories={categories}
                  handleCategory={handleCategory}
                />
              )}
            </div>

            <div className="col-9 row">
              {products.length <= 0 && (
                <div className="spinner-border mx-auto" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}

              <div className="col">
                {" "}
                {activeCategories == "All"
                  ? items.slice(items.length / 2)
                  : FilteredItems.slice(FilteredItems.length / 2)}{" "}
              </div>
              <div className="col">
                {" "}
                {activeCategories == "All"
                  ? items.slice(0, items.length / 2)
                  : FilteredItems.slice(0, FilteredItems.length / 2)}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </StoreContext.Provider>
  );
}
