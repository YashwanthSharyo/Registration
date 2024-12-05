import React from 'react';
import './Navbar.css';

function Navbar({ onAddProfile }) {  
  return (
    <div className="navbar">
      {/* Navbar links */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#about-us">About Us</a>
        <a href="#find">Find</a>
        <a href="#help">Help</a>
      </div>

      
      <div className="navbar-profile">
        <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img" />
        <button id="profile" onClick={onAddProfile}>Profile</button>
      </div>

  
    </div>
  );
}

export default Navbar;
