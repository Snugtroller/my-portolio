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
            <div className="small-box"><FontAwesomeIcon icon={faHtml5} />HTML</div>
            <div className="small-box"><FontAwesomeIcon icon={faCss3Alt} />CSS</div>
            <div className="small-box"><FontAwesomeIcon icon={faJs} />JavaScript</div>
            <div className="small-box"><FontAwesomeIcon icon={faReact} />ReactJs</div>
            <div className="small-box"><CIcon icon={cibNextJs} />Next Js</div>
            
            <div className="small-box"><CIcon icon={cibTypescript} />TypeScript</div>

       
          </div>
        </div>
        <div className="each-border">
          <div className="title1">Backend</div>
          <div className="inner-box">
          <div className="small-box"><FontAwesomeIcon icon={faPython} />Python</div>
            <div className="small-box"><FontAwesomeIcon icon={faJava} />Java</div>
            <div className="small-box"><FontAwesomeIcon icon={faRProject} />R</div>
            <div className="small-box"><FontAwesomeIcon icon={faDatabase} />SQL</div>
            <div className="small-box"><FontAwesomeIcon icon={faC} />C++</div>
            <div className="small-box"><CIcon icon={cibTensorflow} />TensorFlow</div>
            <div className="small-box"><FontAwesomeIcon icon={faChartSimple} style={{color: "#74C0FC",}} />Matlab</div>
            <div className="small-box"><FontAwesomeIcon icon={faFlask} />Flask</div>
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
