import React from "react";
import Navbar from "../navbar"; 
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {
    const navigate = useNavigate(); 
    const handleTabClick = (path) => {
        navigate(path); 
    }
    const openPDF = () => {
        const apiUrl = 'http://127.0.0.1:5000/resume';
    
        window.open(apiUrl, '_blank');
    };

    return (
        <div>
            <Navbar/>
            <div className="main-page">
                <h2>Hey There,<br />I am Suman</h2>
            </div>
            <div className="wrapper">
                <button onClick={openPDF} className="resume-button">Resume</button>
            </div>
        </div>    
    );
};

export default Home;
