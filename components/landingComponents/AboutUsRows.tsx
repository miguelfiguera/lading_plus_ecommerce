import React from "react";
import Image from "next/image";
import product1 from "@/public/product 1.jpeg";
import product2 from "@/public/product 12.jpeg";
import product3 from "@/public/product 13.jpeg";

export default function AboutUsRows() {
  return (
    <div className="container my-5">
      <h1 className="text-center fs-3"> Product / Services</h1>
      <p className="fs-5 text-center">Small description</p>
      <div className="row">
        <div className="col-md my-4 mx-0 shadow-lg py-4 rounded-3">
          {" "}
          <h2>Product 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            tellus et tellus fermentum placerat eu nec orci. Nullam cursus et
            libero eu luctus. Mauris ac accumsan lorem. Donec efficitur diam ut
            augue accumsan, in scelerisque felis volutpat. Vestibulum mi.
          </p>
        </div>
        <div className="col my-4 mx-0 shadow-lg py-4 rounded-3">
          <Image
            src={product1}
            alt="Product 1"
            className="rounded-3"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 order-last order-md-0 my-4 mx-0 shadow-lg py-4 rounded-3">
          <Image
            src={product2}
            alt="Product 2"
            className="rounded-3"

            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col my-4 mx-0 shadow-lg py-4 rounded-3">
          {" "}
          <h2>Product 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            tellus et tellus fermentum placerat eu nec orci. Nullam cursus et
            libero eu luctus. Mauris ac accumsan lorem. Donec efficitur diam ut
            augue accumsan, in scelerisque felis volutpat. Vestibulum mi.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md my-4 mx-0 shadow-lg py-4 rounded-3">
          {" "}
          <h2>Product 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            tellus et tellus fermentum placerat eu nec orci. Nullam cursus et
            libero eu luctus. Mauris ac accumsan lorem. Donec efficitur diam ut
            augue accumsan, in scelerisque felis volutpat. Vestibulum mi.
          </p>
        </div>
        <div className="col my-4 mx-0 shadow-lg py-4 rounded-3">
          <Image
            src={product3}
            className="rounded-3"

            alt="Product 3"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
