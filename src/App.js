import React, { useState } from "react";
import SearchIcon from './search.svg'
import "./App.css";
import MovieCard from "./MovieCard";
import Movies from "./Movies";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";



const App = () => {
   
  const [form, setForm] = useState("login");


  const validateForm = (forms) => {
   setForm(forms)
  }


  return (
    <div> 
     
     <Router>
     
      <Routes>
         
         {
          form === "login" ? <Route path="/" element={<Login  onFormSwitch={validateForm}/>}/> : <Route path="/" element={<Register onFormSwitch={validateForm}/>}/>
         }
         
      
     
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>

   </div>

  )
};

export default App;