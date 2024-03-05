import React from "react";
import Link from "next/link";

export default function Navbar() {
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
            <Link className="nav-link" href="#">
              Store
            </Link>
            <Link className="nav-link" href="#">
              Profile
            </Link>
            <Link className="nav-link" href="#">
              About
            </Link>
            <Link className="nav-link" href="#">
              Blog
            </Link>
            <Link className="nav-link" href="#">
              Admin
            </Link>
            <Link className="nav-link" href="#">
              Users
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
