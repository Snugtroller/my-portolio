import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { useTypewriter, cursor } from "react-simple-typewriter";

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
      "https://drive.google.com/file/d/1iI-9HS6PoC0wIBwE-A9FI3K9ofm1NXq5/view?usp=sharing"; // Example URL
    handleTabClick(resumeDocumentUrl);
  };

  const [typeEffect] = useTypewriter({
    words: ["Web Developer", "Back End Developer", "Data Engineer"],
    loop: {},
    typeSpeed: 20,
    deleteSpeed: 40,
  });
  const [typeEffect1] = useTypewriter({
    words: ["Hey there,"],
    typeSpeed: 150,
    deleteSpeed: 40,
  });
  const [typeEffect2] = useTypewriter({
    words: ["I am Suman"],
    typeSpeed: 200,
    deleteSpeed: 40,
  });

  return (
    <div>
      <Navbar />
      <div className="main-page">
        <h2>
          {typeEffect1} <br />
          {typeEffect2}
        </h2>
      </div>
      <div className="wrapper">
        <button className="resume-button" onClick={handleResumeClick}>
          Resume
        </button>
        <div className="below-type" style={{ color: "white" }}>
          <span style={{ fontWeight: "400", marginLeft: "8%" }}>I'm a</span>
          <span
            style={{ fontweight: "bold", marginLeft: "20px", color: "#ffc339" }}
          >
            {typeEffect}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
