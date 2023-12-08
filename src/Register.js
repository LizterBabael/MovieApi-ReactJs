import React, { useState } from "react";
import { TextField, InputAdornment, Box, Button,Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Movies from "./Movies";

const Register = ({onFormSwitch}) => {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
   
  
    const handleCreateAccount = () => {
        if(username === "" || password === "" || email === "") {
            alert("Please Fill up Your ACcount first!!")
        } else {
            alert("Your Account has been Created joke lang! hahahaha")
            onFormSwitch('login')
        }
    }

    return( 

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
          <Typography variant="h3" sx={{position:"relative", bottom:"100px"}}> CREATE ACCOUNT</Typography>
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
          <TextField
            id="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleCreateAccount}
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          sx={{ position: "relative", top: "60px" }}
          onClick={() => onFormSwitch('login')}
        >
          Already Have an Account?? GO to login!!
        </Button>
  
      </Box>
    )
} 


export default Register;