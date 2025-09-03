import React from "react";
import locationIcon from "../../Images/location.png";
import phoneIcon from "../../Images/phone.png";
import messageIcon from "../../Images/messsage-icon.png";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Talk To Me</h1>
      </div>
      <div className="contact-body-wrapper">
        <div className="nearSide-left">
          <h1>Say Hello</h1>
          <p>
            {" "}
            If you come across a project requiring in need of full-stack
            development services, feel free to connect through the contact
            details below.
          </p>
          <ul>
            <li>
              <img src={messageIcon} alt="" className="email-icon" />{" "}
              <span>Email :</span> metagesyibeltal540@gmail.com
            </li>
            <li>
              <img src={phoneIcon} alt="" className="phone-icon" />{" "}
              <span>Phone :</span> +2519 -23 85 32 52{" "}
            </li>
            <li>
              <img src={locationIcon} alt="" className="location-icon" />
              <span>Location :</span> Injibara Ethiopia
            </li>
          </ul>
        </div>
        <div className="nearSide-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message below</label>
          <textarea name="" id="" placeholder=" Type your message"></textarea>
        </div>
      </div>
      <div className="submit-btn">
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
