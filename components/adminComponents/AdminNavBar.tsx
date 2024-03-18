"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AdminNavBar() {
  const [active, setActive] = useState<number>(0);

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active == 0 ? "active" : ""}`}
          aria-current="page"
          href="/admin"
          onClick={() => setActive(0)}
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href={"/admin/products"}
          className={`nav-link ${active == 1 ? "active" : ""}`}
          aria-disabled="true"
          onClick={() => setActive(1)}

        >
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${active == 2 ? "active" : ""}`} href="/admin/bills"
                  onClick={() => setActive(2)}
                  >
          Bills
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${active == 3 ? "active" : ""}`} href="/admin/users"
                  onClick={() => setActive(3)}
                  >
          Users
        </Link>
      </li>
    </ul>
  );
}
