import React from "react";
import profileImage from "../../Images/Profile-image.jpg";

function Profile() {
  return (
    <div>
      <section className="profile-wrapper">
        <div className="profile-img">
          <img src={profileImage} alt="" />
        </div>
        <div className="headline">
          <h1>
            <span> My Name is Metages Yibeltal</span> <br />
            I'M A Full
            Stack Web Developer
          </h1>
          <p>i am a full stack web developer</p>
        </div>
        <div className="headline-btns">
          <button className="head-btns">Contact Me</button>
          <button className="head-btns">My Resume</button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
