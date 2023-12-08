import React from "react";

export const MovieDetails = ({ details }) => {
  return (
    <div className="Details">
      <div className="conDetails">
        <p>DETAILS OF THIS MOVIE</p>
        <br></br>
        <h3>{details.Title}</h3>
        <br></br>
        <br></br>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookp </p>
      </div>
    </div> 

  );
};