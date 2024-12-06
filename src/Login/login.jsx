import { Box, Typography, Button, InputAdornment, OutlinedInput } from "@mui/material";
import "./login.css";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import InputIcon from "@mui/icons-material/Input";
import PasswordIcon from "@mui/icons-material/Password";

function Login() {
  const [input, setInput] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    const storedUser = JSON.parse(localStorage.getItem("registrationData"));

    if (
      storedUser &&
      input.name === storedUser.email &&
      input.password === storedUser.password
    ) {
      
      window.location.href = "/dashboard";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container1">
        <Box className="container2">
          <Typography variant="h2" className="h2">
            Login
          </Typography>

          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <InputIcon />
              </InputAdornment>
            }
            onChange={handleChange}
            name="name"
            value={input.name}
            margin="normal"
            variant="outlined"
            placeholder="USERNAME"
            required
          />

          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            }
            onChange={handleChange}
            name="password"
            value={input.password}
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="PASSWORD"
            required
          />

          {error && (
            <Typography variant="body2" color="error" className="error">
              {error}
            </Typography>
          )}

          <Button
            endIcon={<LoginIcon />}
            type="submit"
            variant="contained"
            className="btn"
          >
            LOGIN
          </Button>
          <Typography variant="body2" className="register">
            Not Registered?
            <a href="/registration" className="register-link">
              Click Here to Register
            </a>
          </Typography>
        </Box>
      </form>
    </div>
  );
}

export default Login;
