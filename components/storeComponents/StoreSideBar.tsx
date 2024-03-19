"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
//import { logAction } from '@/lib/ServerLogAction'

export default function StoreSideBar({
  active,
  categories,
  handleCategory,
}: {
  active: boolean;
  categories: string[];
  handleCategory: (value: string) => void;
}) {
  useEffect(() => {
    function ToastAlert() {
      if (!active) {
        toast.error("You must be logged to add items to cart!.");
        return;
      }

      return;
    }

    ToastAlert();
  }, [active]);

  const catLi = categories.map((e: string): JSX.Element => {
    return (
      <li className="fs-5" key={e} onClick={() => handleCategory(e)}>
        {" "}
        <button className="my-2 nav-link">{e}</button>
      </li>
    );
  });
  return (
    //this should become a reduced sticky top navbar for mobile
    // or maybe a long sticky top navbar

    <div className="container border rounded-3 mb-4 ps-0">
      <div className="d-flex flex-row justify-content-around">
        <h3 className="text-center fs-4 mt-3">Categories</h3>{" "}
      </div>

      <ul>
        <li className="fs-5 my-2" onClick={() => handleCategory("All")}>
          <button className="nav-link">All</button>
        </li>
        {catLi}
      </ul>
    </div>
  );
}
