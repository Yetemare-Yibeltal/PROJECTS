import React, { useState } from "react";
import { Link } from "react-router-dom";
import contact from "../../Images/contact.png";
function Header() {
  const [headerMenu, setHeaderMenu] = useState("home");
  return (
    <div>
      <header className="header-wrapper">
        <div className="header-img">
          <img src={contact} alt="" />
        </div>
        <nav>
          <ul>
            <li
              onClick={(e) => setHeaderMenu("home")}
              className={headerMenu === "home" ? "underline" : ""}
            >
              <Link to ="/"> Home</Link>
            </li>
            <li
              onClick={(e) => setHeaderMenu("about")}
              className={headerMenu === "about" ? "underline" : ""}
            >
              <Link to ="/about">About</Link>
            </li>
            <li
              onClick={(e) => setHeaderMenu("services")}
              className={headerMenu === "services" ? "underline" : ""}
            >
              <Link to ="/services"> Services</Link>
            </li>
            <li
              onClick={(e) => setHeaderMenu("portfolio")}
              className={headerMenu === "portfolio" ? "underline" : ""}
            >
              <Link to ="/portfolio"> Portfolio</Link>
            </li>
            <li
              onClick={(e) => setHeaderMenu("contact")}
              className={headerMenu === "contact" ? "underline" : ""}
            >
              <Link to ="/contact"> Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-btn">
          <button>Connect With Me</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
