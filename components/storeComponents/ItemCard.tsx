"use client";
import React, { useState } from "react";
import { Product } from "@prisma/client";
import AddToCartButton from "@/components/GeneralUseComponents/AddToCartButton";
export default function ItemCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "500px", height: "250px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {product.photoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.photoUrl}
                className="img-fluid rounded-start"
                alt={`${product.name} photo.`}
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {product.category}
              </h6>
              <p className="card-text overflow-auto">{product.description}</p>
              <p className="card-text d-flex align-items-center gap-3">
                <small className="text-body-secondary">
                  Cost: ${product.price}
                </small>{" "}
                <span className="d-flex align-items-center">
                  <button
                    className="btn border"
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    className="mx-1 rounded-3"
                    style={{ width: "30px" }}
                    onChange={(e) => {
                      setQuantity(parseInt(e.target.value));
                    }}
                    value={quantity}
                  />

                  <button
                    className="btn border"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </span>
                <AddToCartButton product={product} quantity={quantity} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
