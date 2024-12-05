import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';  // Importing the Navbar component
import './dashboard.css';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState([]); // State to store profile data
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    
    const loadedData = JSON.parse(localStorage.getItem('profileData')) || [];
    loadedData.sort((a, b) => a.firstName.localeCompare(b.firstName));

    setProfileData(loadedData);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleProfileClick = () => {
    const userInput = prompt("Enter your First Name, Last Name, and Age (separated by commas):");

    if (userInput) {
      const [firstName, lastName, age] = userInput.split(',');

      const trimmedFirstName = firstName?.trim();
      const trimmedLastName = lastName?.trim();
      const trimmedAge = age?.trim();

      if (trimmedFirstName && trimmedLastName && trimmedAge) {
       
        const currentData = JSON.parse(localStorage.getItem('profileData')) || [];

       
        const newProfile = { firstName: trimmedFirstName, lastName: trimmedLastName, age: trimmedAge };
        currentData.push(newProfile);

        
        currentData.sort((a, b) => a.firstName.localeCompare(b.firstName));

        
        localStorage.setItem('profileData', JSON.stringify(currentData));

        
        setProfileData(currentData);

        alert("Profile details saved successfully!");
      } else {
        alert("Please provide all details in the correct format.");
      }
    } else {
      alert("Input was canceled or empty.");
    }
  };

  return (
    <div className="dashboard-container">
     
      <Navbar onAddProfile={handleProfileClick} /> 

      
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`} ref={sidebarRef}>
        <button onClick={toggleSidebar} className="toggle-btn">
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

     
      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <h1 id="dashboard">Dashboard</h1>

       
        <table className="data-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {profileData.length > 0 ? (
              profileData.map((profile, index) => (
                <tr key={index}>
                  <td>{profile.firstName}</td>
                  <td>{profile.lastName}</td>
                  <td>{profile.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No profiles available.</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Dashboard;
