import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const MovieDetails = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4cee2911efa495d3df6daf14393ba168&language=en-US`
    );
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="container">
      {movie && (
        <>
          <p>{movie.title}</p>
          <img src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`} />
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
