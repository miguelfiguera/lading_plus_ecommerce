import React from "react";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Navbar() {
  let boolean: Boolean = false;

  const session = await auth();

  if (session) {
    const user = session.user;

    user.role == "ADMIN"
      ? (boolean = true)
      : user.role == "ROOT"
        ? (boolean = true)
        : (boolean = false);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand border-none" href="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" href="about">
              About
            </Link>
            <Link className="nav-link" href="/store">
              Store
            </Link>
            <Link className="nav-link" href="/profile">
              Profile
            </Link>

            <Link className="nav-link" href="/blog">
              Blog
            </Link>
            {boolean && (
              <div>
                <Link className="nav-link" href="#">
                  Admin
                </Link>
                <Link className="nav-link" href="#">
                  Users
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
