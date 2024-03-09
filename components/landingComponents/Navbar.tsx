import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import LogOutButton from "../GeneralUseComponents/LogOutButton";

export default async function Navbar() {
  let boolean: Boolean = false;

  const iconStyles={
    color:'#DADADA'
  }

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
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/store">
              Store
            </Link>
          {session &&  <Link className="nav-link" href="/profile">
              Profile
            </Link>}

            <Link className="nav-link" href="/blog">
              Blog
            </Link>
            {boolean && (
              <div className="navbar-nav">
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

        <div className="justify-content-end d-flex gap-3">
        <Link href="/cart" className="me-4 mt-1"><i className="fa-solid fa-cart-shopping fa-xl" style={iconStyles}></i></Link>
        {session ? <LogOutButton /> : <Link href='/login' className="btn btn-primary">LogIn</Link>}
        </div>
      </div>
    </nav>
  );
}
