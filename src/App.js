import React, { useState } from "react";
import { Link } from "react-scroll";
import "./App.css"; // Ensure this includes the CSS provided above

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">My Portfolio</div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          &#9776;
        </div>
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About Me
          </Link>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="main">
        {/* Home Section */}
        <section id="home" className="section home">
          <img
            src="/Srinisha-photo.jpeg"
            alt="Srinisha"
            className="profile-pic"
          />
          <h1>Hi, I'm Srinisha</h1>
          <p>Frontend Developer | React.js Developer</p>
          <a
            href="https://drive.google.com/file/d/1bOIOJUObS07q8XgqdrasuJsDeHzEHtzB/view?usp=drive_link"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </section>

        {/* About Me Section */}
        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>
            I'm Srinisha Pachiyappan, a passionate and self-motivated Front-End
            Developer. With a B.Tech in Information Technology from K.S.R.
            Institute for Engineering and Technology, I specialize in building
            responsive and user-friendly web applications using React.js, HTML,
            CSS, and JavaScript. I have hands-on experience in both web and app
            development, including projects like weather apps, e-commerce
            platforms, and Android-based job tracking apps. I'm constantly
            exploring new technologies and strive to write clean, efficient
            code. Beyond technical skills, I excel in team coordination and
            enjoy contributing to collaborative projects.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="section education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.Tech Information Technology</strong>{" "}
              <div>
                K S R Institute for Engineering and Technology, Anna University
                (2024){" "}
              </div>
              <div>
                <strong>CGPA: </strong>8.18
              </div>
            </li>
            <li>
              <strong>HSC</strong>{" "}
              <div>
                Sri Vijay Vidyalaya Matric Higher Secondary School (2019)
              </div>{" "}
              <div>66%</div>
            </li>
            <li>
              <strong>SSLC</strong> <div> Government High School (2017) </div>
              <div> 88%</div>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Job Tracker App</strong>{" "}
              <div> Android Studio app for tracking jobs of daily workers.</div>
            </li>
            <li>
              <strong>Weather App</strong>{" "}
              <div> Real-time weather app using React.js.</div>
            </li>
            <li>
              <strong>ToDo List</strong>{" "}
              <div> A task manager app built with React.js.</div>
            </li>
            <li>
              <strong>E-Commerce Website</strong>{" "}
              <div> Dynamic e-commerce site using React.js.</div>
            </li>
            <li>
              <strong>Portfolio Website</strong>{" "}
              <div> Personal portfolio website using React.js.</div>
            </li>
            <li>
              <strong>Hodophile</strong>
              <div>Tourism project</div>
              <div>
                <a
                  href="https://hodophile06-9d13a.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  Project
                </a>
              </div>
            </li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section certifications">
          <h2>Certifications</h2>
          <ul>
            <li>
              “REACT JS” course at <strong>G-TEC</strong>
            </li>
            <li>
              “WEB DEVELOPMENT” inplant training at{" "}
              <strong>BRAINERY SPOT TECHNOLOGIES</strong>
              <div>
                <a
                  href="https://drive.google.com/file/d/1GunzbjgCyTxEUnXFrM8hlzSQev7hKFfP/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  Certificate
                </a>
              </div>
            </li>
            <li>
              "PROGRAMMING ESSENTIALS IN PYTHON" from{" "}
              <strong>Cisco Networking Academy</strong>
              <div>
                <a
                  href="https://drive.google.com/file/d/1GxAGEsimHy6vrbaz-QRFXBwDr0x5paf5/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  Certificate
                </a>
              </div>
            </li>
            <li>
              “ANDROID APPLICATION DEVELOPMENT” course from{" "}
              <strong>GREAT LEARNING</strong>
              <div>
                <a
                  href="https://drive.google.com/file/d/1H-vq6iH8AXkUqQqnKGpNeTW69_hOnw59/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  Certificate
                </a>
              </div>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React.js"
                width="30"
              />{" "}
              React.js
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width="30"
              />{" "}
              JavaScript
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                width="30"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                width="30"
                style={{ marginLeft: "8px" }}
              />
              HTML & CSS
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="SQL"
                width="30"
              />{" "}
              SQL
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                width="30"
              />{" "}
              Java
            </li>
          </ul>
        </section>

        <section id="tools" className="section tools">
          <h2>Tools I Use</h2>
          <ul className="skills-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
                width="30"
              />{" "}
              VS Code
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                alt="Android Studio"
                width="30"
              />
              Android Studio
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                width="30"
              />
              Git
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                width="30"
              />{" "}
              GitHub
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Srinisha Pachiyappan
          <br />
          <a href="mailto:srinishapachiyappan2003@gmail.com">
            srinishapachiyappan2003@gmail.com
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Srinisha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
