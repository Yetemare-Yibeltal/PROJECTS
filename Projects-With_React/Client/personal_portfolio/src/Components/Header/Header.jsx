import React, { useState } from "react";
import { Link } from "react-router-dom";
import contact from "../../Images/contact.png";
function Header() {
  const [headerMenu, setHeaderMenu] = useState("home");
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <div className="header-img ms-3 mt-3">
              <img src={contact} className="" />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  d-md-flex  
             "
            id="navbarNav"
          >
            <ul class="navbar-nav   ms-3 d-md-flex text-color-light justify-content-end  align-items-start w-100 list-unstyled  UL-GAP">
              <li
                class="nav-item"
                onClick={(e) => setHeaderMenu("home")}
                className={headerMenu === "home" ? "underline" : ""}
              >
                <Link class="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li
                class="nav-item"
                onClick={(e) => setHeaderMenu("about")}
                className={headerMenu === "about" ? "underline" : ""}
              >
                <Link class="nav-link" to="#">
                  About
                </Link>
              </li>
              <li
                class="nav-item"
                onClick={(e) => setHeaderMenu("services")}
                className={headerMenu === "services" ? "underline" : ""}
              >
                <Link class="nav-link" to="#">
                  Services
                </Link>
              </li>
              <li
                class="nav-item"
                onClick={(e) => setHeaderMenu("portfolio")}
                className={headerMenu === "portfolio" ? "underline" : ""}
              >
                <Link class="nav-link" to="#">
                  Portfolio
                </Link>
              </li>
              <li
                class="nav-item"
                onClick={(e) => setHeaderMenu("contact")}
                className={headerMenu === "contact" ? "underline" : ""}
              >
                <Link class="nav-link" to="#">
                  Contact
                </Link>
              </li>
              <div className="header-btn">
                <button className="d-none d-md-block">Connect With Me</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
