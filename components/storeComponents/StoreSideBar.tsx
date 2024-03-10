"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
//import { logAction } from '@/lib/ServerLogAction'

export default function StoreSideBar({
  active,
  categories,
  handleCategory
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
        {e}
      </li>
    );
  });
  return (
    <div className="container border rounded-3 mb-4 ps-0">
      <div className="d-flex flex-row justify-content-around">
        <h3 className="text-center fs-4">Categories</h3>{" "}
{/*         <i
          className="fa-solid fa-xmark fa-xl my-auto"
          style={{ cursor: "pointer" }}
        ></i> */}
      </div>

      <ul>
        <li className='fs-5' onClick={()=>handleCategory('All')}>All</li>
        {catLi}
        </ul>
    </div>
  );
}
