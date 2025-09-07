import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="" className="header-logo" onClick={closeMenu}>
          Gashuna Hotel
        </Link>
        {/* Mobile Menu Icon */}
        <button
          className=" menu-toggler btn-outline-primary"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {/* Navigation bar */}
        <nav className={`header-nav ${isOpen ? "open" : ""}`}>
          <Link to="/" className=" nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/room" className=" nav-link" onClick={closeMenu}>
            Rooms
          </Link>
          <Link to="/about" className=" nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/gallary" className=" nav-link" onClick={closeMenu}>
            Gallary
          </Link>
          <Link to="/contact" className=" nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
        <div className="header-btns">
          <Link
            to="https://t.me/yibeltalyitayew2024"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-btn"
          >
            Telegram
          </Link>
          <Link to="/contact" className="bookNow">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
