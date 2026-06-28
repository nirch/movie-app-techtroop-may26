import Movie from "../components/Movie";
import "./MoviesPage.css";
import moviesJson from "../data/movies.json";
import { useState } from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState(moviesJson);
  const [comedyOnly, setComedyOnly] = useState(false);

  // displayMovies is a computed value from movies + comedyOnly
  let displayMovies = movies;
  if (comedyOnly) {
    displayMovies = movies.filter((movie) => movie.genres.includes("Comedy"));
  }

  return (
    <div className="movies-page">
      <h1>Movies Page</h1>
      <button onClick={() => setComedyOnly(!comedyOnly)}>
        {comedyOnly ? "Show All" : "Comedy Only"}
      </button>
      {displayMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
