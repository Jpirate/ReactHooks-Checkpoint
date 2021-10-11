import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=de259d24";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.Search);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  const handleSearch = () => {
    let filteredList = movies.filter((el) => el.Year === searchValue);
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
export default App;
