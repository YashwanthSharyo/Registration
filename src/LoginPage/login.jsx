import React, { useState } from 'react';
import './login.css'; 

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const storedUser = JSON.parse(localStorage.getItem('registrationData'));

    if (
      storedUser &&
      credentials.username === storedUser.email && 
      credentials.password === storedUser.password
    ) {
      
      window.location.href = 'https://www.instagram.com';
    } else {
      
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Enter Your Username (Email)"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-btn">
            Log In
          </button>
          <div className="loginwithotp">
            <a href="https://www.google.com">Login With OTP</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
