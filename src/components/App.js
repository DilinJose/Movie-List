import "../assets/style/style.css";

import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=839a53c5";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("all");
  }, []);

  const searchMovies = async (title) => {
    // const response = await fetch(`${API_URL}&s=${title}`)
    // const data = await response.json();
    // setMovies(data.Search);

    await fetch(`${API_URL}&s=${title}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };

  return (
    <div className="app">
      <h1>Search For Movies</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button className="btn-search" onClick={() => searchMovies(searchTerm)}>
          Search
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
