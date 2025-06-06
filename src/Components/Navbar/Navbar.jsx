import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-second-color fixed-top ">
        <div className="container py-2">
          <a
            className="navbar-brand text-white fw-bolder fs-2 text-uppercase"
            href="/"
          >
            Start Framework
          </a>
          {/* toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-3 mb-3">
                <NavLink
                  className="nav-link  text-white fw-bolder text-uppercase"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item ms-3 mb-3">
                <NavLink
                  className="nav-link  text-white fw-bolder text-uppercase"
                  aria-current="page"
                  to="/portofolio"
                >
                  portfolio
                </NavLink>
              </li>

              <li className="nav-item ms-3 mb-3">
                <NavLink
                  className="nav-link  text-white fw-bolder text-uppercase"
                  aria-current="page"
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
