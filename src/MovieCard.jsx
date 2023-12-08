import React, { useState } from "react";
import { MovieDetails } from "./MovieDetails";

const MovieCard = ({movies }) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const handleClick = () => {
        setIsDetailsVisible(!isDetailsVisible);
    }
 
    return (
        <div className="movie" onClick={handleClick}> 
        <div> 
            <p>{movies.Year}</p>
        </div>
        
         <div> 
         <img src={movies.Poster !== 'N/A' ? movies.Poster : "walang laman" } alt={movies.Title}/>
         </div>
        <div> 
            <span>{movies.Type}</span>
            <h3>{movies.Title}</h3>
            
        </div>
       
        {isDetailsVisible && <MovieDetails details={movies}/>}

        </div>
    )
}


export default MovieCard;