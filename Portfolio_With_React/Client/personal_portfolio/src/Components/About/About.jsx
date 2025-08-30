import React from "react";
import aboutImage from "../../Images/About-image.jpg";
function About() {
  return (
    <div>
      <section className="about-wrapper">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-body">
          <div className="about-img">
            <img src={aboutImage} alt="" />
          </div>
          <div className="aboutmeDescANDSkill">
            <div className="description">
              <p>
                I'M Metages, a passionate Full Stack Developer with a flair for
                building clean, responsive web experiences that blend design and
                functionality. With a solid foundation in HTML, CSS, JavaScript,
                and the MERN stack, I thrive on turning complex ideas into
                user-friendly digital solutions.
              </p>
              <p>
                I believe great code tells a story — one that’s readable,
                maintainable, and built to last. I’m constantly exploring new
                tools, frameworks, and best practices to stay ahead of the curve
                and deliver solutions that are not just functional, but elegant.
                Collaboration, problem-solving, and continuous learning are at
                the heart of my workflow
              </p>
              <p>
                On the backend, I engineer robust server-side logic using
                Node.js and Express, design RESTful APIs, and manage data flow
                with MongoDB — ensuring every application is fast, secure, and
                built for growth. I value clean architecture, modular code, and
                performance-driven development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="skill-wrapper">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>Media Query</li>
          <li>React</li>
          <li>Nodejs</li>
          <li>MYSQL</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
