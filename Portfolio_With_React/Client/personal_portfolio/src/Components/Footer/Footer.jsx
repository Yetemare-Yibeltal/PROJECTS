import React from "react";
import DeveloperLogo from "../../Images/Developer-logo.jpg"
function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="social-media-icons">
        <ul>
          <li>
            {" "}
            <a href="">
              <i
                className="bi bi-linkedin"
                style={{ fontSize: "24px", color: "#0A66C2" }}
              ></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <i
                className="bi bi-telegram"
                style={{ fontSize: "24px", color: "#0088cc" }}
              ></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <i
                className="bi bi-facebook"
                style={{ fontSize: "24px", color: "#1877F2" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i
                className="bi bi-youtube"
                style={{ fontSize: "24px", color: "#FF0000" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <hr className="custome-hr"></hr>

      <div className="footer-copyright">
        <small>&copy; 2025 Metages Yibeltal, All rights reserved.</small>
        <ul>
          <li>Terms Of Services</li>
          <li>Privacy Policy</li>
          <li>Aceessiblity Statement</li>
        </ul>
      </div>
      <section className="Dev-logo">
        <p>Designed by Metages Yibeltal </p>
        <img src={DeveloperLogo} alt="Developer logo" />
      </section>
    </section>
  );
}

export default Footer;
