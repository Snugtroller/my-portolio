import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3Alt,faHtml5,faJs,faReact,faPython,faJava,faRProject} from '@fortawesome/free-brands-svg-icons';
import { faDatabase ,faN,faC,faFlask,faT,faChartSimple} from '@fortawesome/free-solid-svg-icons';
import CIcon from '@coreui/icons-react';
import { cibTensorflow,cibTypescript,cibNextJs,cibKeras } from '@coreui/icons';
import Typewriter from "typewriter-effect";
const SmallBox = ({ type }) => {
    return (
      <div className="small-box">
        <FontAwesomeIcon icon={type === "html" ? faHtml5 : faCss3Alt} />
        <div className="dialogue-box">{type}</div> {/* Display type in dialogue box */}
      </div>
    );
  };
const Skills = () => {
  const navigate = useNavigate();
  const handleTabClick = (path) => {
    navigate(path);
  };
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
      <div className="skill-border">
        <div className="each-border">
          <div className="title1">Frontend</div>
          <div className="inner-box">
            <div className="small-box"><a href="https://html.com/" target="blank"><FontAwesomeIcon icon={faHtml5} /></a>HTML</div>
            <div className="small-box"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank"><FontAwesomeIcon icon={faCss3Alt} /></a>CSS</div>
            <div className="small-box"><a href="https://www.javascript.com/" target="blank"><FontAwesomeIcon icon={faJs} /></a>JavaScript</div>
            <div className="small-box"><a href="https://react.dev/" target="blank"><FontAwesomeIcon icon={faReact} /></a>ReactJs</div>
            <div className="small-box"><a href="https://nextjs.org/" target="blank"><CIcon icon={cibNextJs} /></a>Next Js</div>
            <div className="small-box"><a href="https://www.typescriptlang.org/" target="blank"><CIcon icon={cibTypescript} /></a>TypeScript</div>

       
          </div>
        </div>
        <div className="each-border">
          <div className="title1">Backend</div>
          <div className="inner-box">
          <div className="small-box"><a href="https://www.python.org/" target="blank"><FontAwesomeIcon icon={faPython} /></a>Python</div>
            <div className="small-box"><a href="https://www.java.com/en/" target="blank"><FontAwesomeIcon icon={faJava} /></a>Java</div>
            <div className="small-box"><a href="https://www.r-project.org/about.html" target="blank"><FontAwesomeIcon icon={faRProject} /></a>R</div>
            <div className="small-box"><a href="https://www.mysql.com//" target="blank"><FontAwesomeIcon icon={faDatabase} /></a>SQL</div>
            <div className="small-box"><a href="https://cplusplus.com/" target="blank"><FontAwesomeIcon icon={faC} /></a>C++</div>
            <div className="small-box"><a href="https://www.tensorflow.org/" target="blank"><CIcon icon={cibTensorflow} /></a>TensorFlow</div>
            <div className="small-box"><a href="https://flask.palletsprojects.com/en/3.0.x/" target="blank"><FontAwesomeIcon icon={faFlask} /></a>Flask</div>
          </div>
        </div>
        <div className="each-border">
          <div className="title1">Other Technologies</div>
          <div className="inner-box">
          <div className="small-box">Machine Learning</div>
            <div className="small-box">Web Dev</div>
            <div className="small-box">Blockchain</div>
            <div className="small-box">Neural Networking</div>
            <div className="small-box">Image Processing</div>
            <div className="small-box">Data Structures</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
