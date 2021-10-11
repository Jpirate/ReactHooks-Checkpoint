import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="col-md-3" key={index}>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
