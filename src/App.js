import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './registration/Registration';  // Registration Component
import Login from './LoginPage/login';                    // Login Component
import Dashboard from './Dashboard/dashboard'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Registration />} />     
        <Route path="/login" element={<Login />} />         
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
