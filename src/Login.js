import React, { useState } from "react";
import { TextField, InputAdornment, Box, Button,Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import Movies from "./Movies";

const Login = ({onFormSwitch}) => {

    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Lizter" && password === "babael") {
      navigate("/movies");
    } else {
      alert("Invalid Account");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        backgroundColor: "white",
        width: "600px",
        position: "relative",
        left: "550px",
        top: "100px",
      }}
    >
        <Typography variant="h3" sx={{position:"relative", bottom:"100px"}}> LOGIN ACCOUNT</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    
        <TextField
          id="Username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="Password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <Button
        variant="contained"
        sx={{ position: "relative", top: "20px" }}
        onClick={handleLogin}
      >
        Login
      </Button>

      <Button
        variant="contained"
        sx={{ position: "relative", top: "60px" }}
        onClick={() => onFormSwitch('Register')}
      >
        Don't Have an Account? Go to Register Now!!
      </Button>


    </Box>
  );
};

export default Login;