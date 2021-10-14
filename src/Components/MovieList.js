import React from "react";
import { Link } from "react-router-dom";
const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="col-md-3" key={index}>
          <Link to={`/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
              alt="movie"
            />
          </Link>
          <h6>{movie.original_title}</h6>
        </div>
      ))}
    </>
  );
};

export default MovieList;
