import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=4cee2911efa495d3df6daf14393ba168&language=en-US&page=1";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.results);
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  const handleSearch = () => {
    let filteredList = movies.filter((el) =>
      el.original_title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMovies(filteredList);
    console.log(filteredList);
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};
export default Home;
