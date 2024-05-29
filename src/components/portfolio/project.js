import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import "./project.css";
import derm from "../derm.jpg";
import game1 from "../game2.webp";
import img1 from "./skin.avif";
import weather from "../weather.jpg";
import tic from "../tic tac toe.avif";
import co2 from "../co2.jpg";
import Typewriter from "typewriter-effect";


const Project = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };
  

  return (
    <div className="project-container">
      <Navbar />
      <div className="border">
      <div className="main-title">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("My Projects")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Switch to other tabs to know me better!")
                        .start();
                }}
            />
        </div>
        <div id="scrollbar5">
        <div className="box-container">
          <div className="box-row">
            <div className="box">
              <img className="derm" src={derm} alt="Project"></img>
              <div className="project-description">
                <h2>Skin Disease Detection</h2>
                <p>
                  With the help of machine learning we can predict the type of
                  skin disease. This website allows to upload an image and the
                  model will predict whether that part of the skin is infected
                  or not. If it is, the model will predict the type of skin
                  disease.
                </p>
                <h3>Technologies Used</h3>
                <ul>
                  <li>ML Tools</li>
                  <li>ReactJs</li>
                  <li>API</li>
                  <li>Roboflow</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <img className="game1" src={game1} alt="Project"></img>
              <div className="project-description">
                <h2>Game Suggestion Generator</h2>
                <p>
                  This website will give suggestions based on the similarities
                  of the game which the user selects. Hence makes it easier for
                  the user to pick games of his choice. There can be a future
                  scope in this project as it can be used in comment sections of
                  different platforms to predict the most popular comment.
                </p>
                <h3>Technologies Used</h3>
                <ul>
                  <li>Machine Learning (Vectorization)</li>
                  <li>ReactJs</li>
                  <li>Flask</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <img className="weather" src={weather} alt="Project"></img>
              <div className="project-description">
                <h2>Weather Forecast</h2>
                <p>
                  This website will help you track the temperature of any place
                  around the world. it provides real-time temperature readings
                  and also offer detailed information on cloud cover.
                </p>
                <h3>Technologies Used</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>API</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-row">
            <div className="box">
              <img className="tic" src={tic} alt="Project"></img>
              <div className="project-description">
                <h2>Tic Tac Toe</h2>
                <p>
                  Tic-tac-toe is a two-player game played on a 3x3 grid. Players
                  take turns marking empty squares with their symbols (X or O).
                  The first player to get three of their symbols in a row wins.
                  If the grid fills up without a winner, the game ends in a
                  draw.
                </p>
                <h3>Technologies Used</h3>
                <ul>
                  <li>TypeScript</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <img className="co2" src={co2} alt="Project"></img>
              <div className="project-description">
                <h2>CO2 Emission Predictor</h2>
                <p>
                  A machine learning project on CO2 emissions from vehicles
                  could involve analyzing vehicle characteristics such as engine
                  size, fuel type, vehicle weight, and mileage, along with
                  driving behavior and road conditions, to predict CO2
                  emissions. Hence it will be easier to ban vehicles which cause
                  more emission.
                </p>
                <h3>Technologies Used</h3>
                <ul>
                  <li>Machine learning</li>
                  <li>Flask</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className="box"></div>
          </div>
          <div className="box-row"></div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Project;
