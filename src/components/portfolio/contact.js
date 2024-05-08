import React, { useRef } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = e.target.form;
  
    emailjs
      .sendForm("service_7al0hju", "template_geud0sk", form.current, {
        publicKey: "BwrXoyrN-S4CUBRZY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error); // Log the error message
        }
      );
  };

  return (
    <div>
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
                  .typeString(
                    "I'm just a click away. Let's connect and explore possibilities together."
                  )
                  .start();
              }}
            />
          </div>
          <form ref={form} onSubmit={sendEmail}>
          <div className="group">
            <input type="text" required placeholder="Name" name="user_name" />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="group">
            <input type="text" required placeholder="Email" name="user_email" />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="group">
            <input
              type="tel"
              required
              placeholder="Phone"
              name="user_phone"
            />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div className="group">
            <textarea
              id="user-message"
              name="message"
              className="message-box"
              rows="2"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="group">
            <input
              type="submit"
              value="Submit"
              className="submit-button"
            />
          </div>
          </form>
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
            <FontAwesomeIcon icon={faInstagram}bounce  />
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
