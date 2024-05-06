import logo from './logo.svg';
import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './components/portfolio/home';
import "./index.css"
import Project from './components/portfolio/project';
import About from './components/portfolio/about';
import Hobbies from './components/portfolio/skills';
import Contact from './components/portfolio/contact';
import ParticlesComponent from './components/particles';
import './App.css';

function App() {
  const location=useLocation();
  const renderParticleJsInHomePage=location.pathname==="/";
  return (
    <div className="App">
      
      {
        renderParticleJsInHomePage &&
        <ParticlesComponent id="particles"/>
      } 
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
