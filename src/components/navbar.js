// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/hobbies">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar; // Change to default export
