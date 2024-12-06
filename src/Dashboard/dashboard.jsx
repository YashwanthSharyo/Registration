
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar'; 
import './dashboard.css';
import { IconButton } from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'; 
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState([]); 
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
        alert("Invalid Credentials.");
      }
    } else {
      alert("Details have been deleted successfully");
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar onAddProfile={handleProfileClick} /> 
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`} ref={sidebarRef}>
        <IconButton onClick={toggleSidebar} className="toggle-btn">
            <MenuIcon style={{ color: 'white', marginLeft: '250px', fontSize: '40px' }} />
        </IconButton>
        <ul>
          <li><a href="#home"><HomeIcon /> Home</a></li>
          <li><a href="#about"><InfoIcon /> About</a></li>
          <li><a href="#services"><BuildIcon /> Services</a></li>
          <li><a href="#contact"><ContactMailIcon /> Contact</a></li>
        </ul>
      </div>

      
      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <TableContainer>
            <div className='TableContainer'>
                <h1 id="dashboard">Dashboard</h1>
            </div>
          <Table className="data-table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profileData.length > 0 ? (
                profileData.map((profile, index) => (
                  <TableRow key={index}>
                    <TableCell>{profile.firstName}</TableCell>
                    <TableCell>{profile.lastName}</TableCell>
                    <TableCell>{profile.age}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3}>No profiles are available.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Dashboard;
