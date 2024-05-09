import React ,{useState } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./about.css";
import mine from '../my.jpeg';
const About = () => {
  const navigate = useNavigate();
  const handleTabClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="gradient"></div>
      <Navbar />
      <div className="about-page">
        <img src={mine}></img>
        <div className="about-border">
          <h2>My Story</h2>
          <h3>My Journey</h3>
          <p>
            I pursued my secondary education at Delhi Public School Bangalore
            East (DPS) and am currently enrolled in my second year of Bachelor
            of Technology (B.Tech) at SRM Institute of Science and Technology.
            My academic focus and interests lie in the domains of machine
            learning and web development. During my first year, I dedicated
            significant time to enhancing my proficiency in Python programming
            language. I have successfully completed various Python courses and
            completing a comprehensive course-internship on data science during
            my second year. Through these endeavors, I have acquired a strong
            foundation in Python and data science methodologies. Moreover, I
            have actively engaged in practical application and exploration of
            machine learning concepts. This includes completing multiple minor
            projects in the field of machine learning, wherein I have
            demonstrated my ability to implement algorithms and analyze data
            effectively.
          </p>
          <h3>My Vision</h3>
          <p>
            With a profound commitment to utilizing technology for sustainable
            development, my primary objective is to engineer innovative
            solutions that positively impact society. I am driven by a steadfast
            determination to create tools and systems that address real-world
            challenges, thereby contributing to the betterment of communities.
            In alignment with this vision, I have conscientiously undertaken
            projects aimed at serving societal needs. One notable accomplishment
            in this regard is the completion of a project designed to provide
            tangible benefits to individuals and communities. This project,
            meticulously developed and implemented, embodies my dedication to
            leveraging technology for the betterment of society. Through this
            endeavor, I have witnessed firsthand the transformative potential of
            technology when wielded with a focus on sustainability and social
            impact.  I can play a meaningful role
            in fostering sustainable development and fostering positive change
            for generations to come.
          </p>
        </div>
      </div>
      </div>
  );
};
export default About;
