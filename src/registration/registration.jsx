
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';  
import './registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    localStorage.setItem('registrationData', JSON.stringify(formData));
    alert('Registration successful!');

    navigate('/');
  };

  return (
    <Box className="registration-form">
      <Typography variant="h4" className="form-title">
        Enter Your Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="Enter Your First Name"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Enter Your Last Name"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Your Password"
          required
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <MenuItem value="">Select Gender</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className="register-btn"
          startIcon={<AccountCircle />}  
        >
          Register
        </Button>
      </form>
      <Typography className='endPoint'>
        Already Registered? <a href="/">Click here to Login</a>
      </Typography>
    </Box>
  );
}

export default Registration;
