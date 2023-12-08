import React, { useState } from "react";
import SearchIcon from './search.svg'
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=355982f4';





const Movies = () => {
   const [movies, setMovies] = useState ([])
   const [searchMovie, setSearchMovie] = useState ("")
   
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  
  };
 


  return (
    <div className="app"> 
  
    <h1> Movie ni Lizter</h1>
    <div className="search"> 
        <input
        placeholder="Search for movies"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}

        /> 
        <img 
        src={SearchIcon}
        alt="SearchIcon"
        onClick={() => searchMovies(searchMovie)}
        />
    </div>

     {
        movies?.length > 0
         ? (
            <div className="container">
              {movies.map((movie) =>  (
                <MovieCard movies={movie} />
              ))}
            </div>
         ) : (
            <div className="empty"> 
             <h2> No movies found</h2>
            </div>
         )
     }
    
</div>

  )
};

export default Movies;