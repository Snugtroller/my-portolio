import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import "./project.css";
import derm from "../derm.jpg";
import game1 from "../game2.webp";
import img1 from "./skin.avif";
import weather from "../weather.jpg";
import garden from "../garden.jpg";
import co2 from "../co2.jpg";
import Typewriter from "typewriter-effect";
import inventory from "../inventory.png";
import hand from "../hand-gesture.avif";
import speech from "../speech.webp";
import disease from "../plantDiseases.png";

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
                    of the game which the user selects. Hence makes it easier
                    for the user to pick games of his choice. There can be a
                    future scope in this project as it can be used in comment
                    sections of different platforms to predict the most popular
                    comment.
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
                    This website will help you track the temperature of any
                    place around the world. it provides real-time temperature
                    readings and also offer detailed information on cloud cover.
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
                <img className="tic" src={garden} alt="Project"></img>
                <div className="project-description">
                  <h2>Garden Scapes - A 3D Interactive Website</h2>
                  <p>
                    For my Smart India Hackathon 2024 project, I developed a 3D
                    virtual garden model for AYUSH using Blender and integrated
                    it with Three.js in a React.js application. The project
                    offers an interactive 3D experience where users can explore
                    ayurvedic plants, and by hovering over a plant, they can
                    view detailed information about it. This blend of 3D
                    modeling and educational content provides an engaging way to
                    learn about the significance of these plants in traditional
                    medicine.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>ThreeJS</li>
                    <li>Blender</li>
                    <li>ReactJs</li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <img className="co2" src={co2} alt="Project"></img>
                <div className="project-description">
                  <h2>CO2 Emission Predictor</h2>
                  <p>
                    A machine learning project on CO2 emissions from vehicles
                    could involve analyzing vehicle characteristics such as
                    engine size, fuel type, vehicle weight, and mileage, along
                    with driving behavior and road conditions, to predict CO2
                    emissions. Hence it will be easier to ban vehicles which
                    cause more emission.
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
              <div className="box">
                <img className="co2" src={inventory} alt="Project"></img>
                <div className="project-description">
                  <h2>Inventory System </h2>
                  <p>
                    This mobile application allows admins to manage and view
                    their personal data, including home information, detailed
                    lists, and database records. Additionally, the application
                    enables admins to generate and scan QR codes, typically used
                    for managing inventory in a supermarket setting. The QR
                    codes are placed on food packets, and when scanned, these
                    packets are entered into the database with a unique ID.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul>
                    <li>React Native (Expo Go)</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-row">
              <div className="box">
                <img className="co2" src={hand} alt="Project"></img>
                <div className="project-description">
                  <h2>Hand Gesture Recognition</h2>
                  <p>
                    This project implements real-time hand gesture recognition
                    using OpenCV for video processing and MediaPipe for
                    detecting hand landmarks. It enables gesture-based control
                    and interaction by recognizing key hand movements, with
                    potential applications in sign language recognition and
                    touchless interfaces.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul>
                    <li>OpenCV</li>
                    <li>Media Pipe</li>
                    <li>Deep Learning</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <img className="co2" src={speech} alt="Project"></img>
                <div className="project-description">
                  <h2>Speech Recognition </h2>
                  <p>
                    This speech recognition system records audio, extracts MFCC
                    features, and passes them into a pre-trained model to
                    predict the spoken word. The prediction is then decoded into
                    a human-readable label using a LabelEncoder,providing
                    accurate word recognition based on the audio input.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul>
                    <li>Librosa</li>
                    <li>Deep Learning</li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <img className="co2" src={disease} alt="Project"></img>
                <div className="project-description">
                  <h2>Plant Disease Detection </h2>
                  <p>
                    This project presents an intelligent system for plant
                    disease detection, whereby diseases are identified from
                    images of the leaves of the plants with VGG16 as a
                    pre-trained model in feature extraction and
                    RandomForestClassifier for classification.
                  </p>
                  <h3>Technologies Used</h3>
                  <ul>
                    <li>VGG16</li>
                    <li>ML Model</li>
                    <li>OpenCV</li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
