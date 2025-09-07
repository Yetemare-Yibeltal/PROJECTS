import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const quickLinks = [
    {
      name: "Home",
      to: "/",
    },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Rooms", to: "/rooms" },
    { name: "Gallary", to: "/gallary" },
  ];
  // Your social media links;
const SocialMediaLinks = [
  {
    name: "WhatsApp",
    icon: <FontAwesomeIcon icon={faWhatsapp} />,
    URL: "https://wa.me/your-number",
  },
  {
    name: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
    URL: "https://instagram.com/your-profile",
  },
  {
    name: "TikTok",
    icon: <FontAwesomeIcon icon={faTiktok} />,
    URL: "https://tiktok.com/@your-profile",
  },
];
  const HotelPhoneNo = "+251 923 85 32 52";
  const HotelEmail = "gashuna@gmail.com";
  const HotelAddress = "Dangila Ethiopia";
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-quick-links">
            <h2 className="footer-heading">Gashuna Dangila</h2>
            <p className="footer-description">
              Your comfort is our priority—relax in cozy rooms, enjoy thoughtful
              service, and feel right at home.
            </p>
          </div>
          <div className="link-container">
            <div className="footer-col footer-quick-links">
              <h3 className="footer-heading 
              ">Quick Links</h3>
              <ul className="footer-links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-col footer-contact-info">
            <h3 className="footer-heading">Contact us</h3>
            <p>
              <a href={`tel:${HotelPhoneNo}`}>{HotelPhoneNo}</a>
            </p>
            <p>
              <a href={`mailto:${HotelEmail}`}>{HotelEmail}</a>
            </p>
            <p className="footer-address">Address: {HotelAddress}</p>
          </div>

          <div className="footer-col footer-social-medias">
            <h3 className="footer-heading">Chat with Us</h3>
            <div className="social-icons">
              {SocialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${social.name}`}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="copyright-text">
          &copy; {currentYear} Gashuna. All rights reserved. powered by{" "}
          <a
            href="https://www.metu.com"
            target="_blank"
            rel="noonpener noreferrer"
            className="metu-link"
          >
            Metages webs.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
