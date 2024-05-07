import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./home.css";
import {useTypewriter,cursor} from "react-simple-typewriter";

// Define the handleTabClick function outside of the component
const handleTabClick = (resumeDocumentUrl) => {
  // Open the resume document URL in a new tab
  window.open(resumeDocumentUrl, "_blank");
};

const Home = () => {
  const navigate = useNavigate();

  // Pass the resume document URL as an argument to handleTabClick
  const handleResumeClick = () => {
    // Replace 'resume_document_url' with the actual URL of your resume document
    const resumeDocumentUrl =
      "https://drive.google.com/file/d/1qHI9DlupchyfZtkq9pOkExURbHRGg2zN/view?usp=drive_link"; // Example URL
    handleTabClick(resumeDocumentUrl);
  };

  const [typeEffect]=useTypewriter({
    words:['Web Developer','Back End Developer','Data Engineer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })

  return (
    <div>
      <Navbar />
      <div className="main-page">
        <h2>
          Hey There,
          <br />I am Suman
        </h2>
      </div>
      <div className="wrapper">
        <button className="resume-button" onClick={handleResumeClick}>
          Resume
        </button>
      </div>
      <div className="below-type">
        I'm a
        <span style={{fontweight:'bold',marginLeft:'20px',color:'white'}}>{typeEffect}</span>
      </div>
    </div>
  );
};

export default Home;
