import React, { useState } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faPython,
  faJava,
  faRProject,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faC } from "@fortawesome/free-solid-svg-icons";
import CIcon from "@coreui/icons-react";
import {
  cibTensorflow,
  cibTypescript,
  cibNextJs,
  cibNativescript,
  cibFlask,
} from "@coreui/icons";
import Typewriter from "typewriter-effect";
import front from "../front-end.png";
import back from "../backend.png";
import tech from "../virtual-reality.png";
import "./skills.css";
import CustomModal from "./modal";
import "./modal.css";
const Skills = () => {
  const navigate = useNavigate();
  const handleTabClick = (path) => {
    navigate(path);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleOpenModal = (title, body) => {
    setModalContent({ title, body });
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Navbar />
      <div className="title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("My Skills")
              .pauseFor(1000)
              .deleteAll()
              .typeString("My Proficiencies")
              .start();
          }}
        />
      </div>
      <div className={`skill-border ${showModal ? "blurred" : ""}`}>
        <div className="each-border">
          <div className="title1">Frontend</div>
          <img className="front" src={front} alt="Frontend" />
          <div className="inner-box">
            <div className="small-box">
              <a href="https://html.com/" target="blank">
                <FontAwesomeIcon icon={faHtml5} />
              </a>
              HTML
            </div>
            <div className="small-box">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="blank"
              >
                <FontAwesomeIcon icon={faCss3Alt} />
              </a>
              CSS
            </div>
            <div className="small-box">
              <a href="https://www.javascript.com/" target="blank">
                <FontAwesomeIcon icon={faJs} />
              </a>
              JavaScript
            </div>
            <div className="small-box">
              <a href="https://react.dev/" target="blank">
                <FontAwesomeIcon icon={faReact} />
              </a>
              ReactJs
            </div>
            <div className="small-box">
              <a href="https://nextjs.org/" target="blank">
                <CIcon icon={cibNextJs} />
              </a>
              Next Js
            </div>
            <div className="small-box">
              <a href="https://www.typescriptlang.org/" target="blank">
                <CIcon icon={cibTypescript} />
              </a>
              TypeScript
            </div>
            <div className="small-box">
              <a href="https://reactnative.dev/" target="blank">
                <CIcon icon={cibNativescript} />
              </a>
              ReactNative
            </div>
          </div>
        </div>
        <div className="each-border">
          <div className="title1">Backend</div>
          <img className="back" src={back} alt="Backend" />
          <div className="inner-box">
            <div className="small-box">
              <a href="https://www.python.org/" target="blank">
                <FontAwesomeIcon icon={faPython} />
              </a>
              Python
            </div>
            <div className="small-box">
              <a href="https://www.java.com/en/" target="blank">
                <FontAwesomeIcon icon={faJava} />
              </a>
              Java
            </div>
            <div className="small-box">
              <a href="https://www.r-project.org/about.html" target="blank">
                <FontAwesomeIcon icon={faRProject} />
              </a>
              R
            </div>
            <div className="small-box">
              <a href="https://www.mysql.com/" target="blank">
                <FontAwesomeIcon icon={faDatabase} />
              </a>
              SQL
            </div>
            <div className="small-box">
              <a href="https://cplusplus.com/" target="blank">
                <FontAwesomeIcon icon={faC} />
              </a>
              C++
            </div>
            <div className="small-box">
              <a href="https://www.tensorflow.org/" target="blank">
                <CIcon icon={cibTensorflow} />
              </a>
              TensorFlow
            </div>
            <div className="small-box">
              <a
                href="https://flask.palletsprojects.com/en/3.0.x/"
                target="blank"
              >
                <CIcon icon={cibFlask} />
              </a>
              Flask
            </div>
          </div>
        </div>
        <div className="each-border">
          <div className="title1">Other Technologies</div>
          <img className="tech" src={tech} alt="Other Technologies" />
          <div className="inner-box">
            <div
              className="small-box"
              onClick={() =>
                handleOpenModal(
                  "Machine Learning",
                  "I have completed a supervised machine learning course on Coursera by Andrew Ng, as well as several other courses from YouTube. I have experience building models using various algorithms and am familiar with libraries such as TensorFlow, Keras, Matplotlib, Pandas, NumPy, and many others."
                )
              }
            >
              Machine Learning{" "}
            </div>

            <div
              className="small-box"
              onClick={() =>
                handleOpenModal(
                  "Blockchain",
                  "I completed a Solidity course by freeCodeCamp and have a good understanding of Solidity, although my interests lie elsewhere. I also participated in a blockchain-related hackathon where my team and I built a real estate website enabling easy payments using Solidity, XDC Network (Sponsor), React."
                )
              }
            >
              Blockchain
            </div>
            <div
              className="small-box"
              onClick={() =>
                handleOpenModal(
                  "Neural Networking",
                  "Currently working on this tech."
                )
              }
            >
              Neural Networking
            </div>
            <div
              className="small-box"
              onClick={() =>
                handleOpenModal(
                  "Image Processing",
                  "I have completed several courses from MathWorks and Great Learning. During my college studies, I took a course on Digital Image Processing. I have experience with tools such as OpenCV, MATLAB, and Roboflow. Additionally, in one of the hackathons, my team and I built a full-stack project focused on skin detection."
                )
              }
            >
              Image Processing
            </div>
            <div
              className="small-box"
              onClick={() =>
                handleOpenModal(
                  "Data Structures",
                  "I have a deep interest in data structures and algorithms. To further my knowledge in this area, I completed a course on mastering algorithms from Udemy. I enjoy solving complex problems and continuously strive to improve my skills in this domain.  My passion for problem-solving drives me to explore new challenges and develop efficient solutions."
                )
              }
            >
              Data Structures
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        title={modalContent.title}
        body={modalContent.body}
      />
    </div>
  );
};

export default Skills;
