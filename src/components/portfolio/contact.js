import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faMailbox,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      <Navbar />
      <div className="title">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-border">
        <div className="form-border">
        <div className="new-title">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Interested in reaching out?")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm just a click away. Let's connect and explore possibilities together.")
                        .start();
                }}
            />
        </div>
          <div className="group">
            <input type="text" required placeholder="Name" />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="group">
            <input type="text" required placeholder="Email" />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="group">
            <input
              type="tel"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone"
            />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="group">
            <textarea
              id="user-message"
              name="user-message"
              className="message-box"
              rows="2"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="group">
            <input type="submit" value="Submit" className="submit-button" />
          </div>
        </div>
      </div>
      <div className="logo-border">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/suman-s-7b1313211/">
            <FontAwesomeIcon icon={faLinkedin} bounce />
          </a>
          <a href="https://github.com/Snugtroller">
            <FontAwesomeIcon icon={faGithub} bounce />
          </a>
          <a href="https://www.instagram.com/8_suman_8/?next=%2F">
            <FontAwesomeIcon icon={faInstagram} bounce />
          </a>
          <a href="https://twitter.com/SumanS1079452">
            <FontAwesomeIcon icon={faTwitter} bounce />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
