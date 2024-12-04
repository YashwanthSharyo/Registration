import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
            alert("Passwords do not match!");
            return;
        }

        
        localStorage.setItem('registrationData', JSON.stringify(formData));
        alert("Registration successful!");

       
        navigate('/login');
    };

    return (
        <div className="registration-form">
            <h1>Enter Your Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name:</label>
                <input
                    type="text"
                    placeholder="Enter Your First Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="lname">Last Name:</label>
                <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    placeholder="Confirm Your Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="gender">Gender:</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Registration;
