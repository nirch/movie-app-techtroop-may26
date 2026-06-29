import Movie from "../components/Movie";
import "./MoviesPage.css";
import moviesJson from "../data/movies.json";
import { useState } from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState(moviesJson);
  const [comedyOnly, setComedyOnly] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // displayMovies is a computed value from movies + comedyOnly
  let displayMovies = movies;
  if (comedyOnly) {
    displayMovies = displayMovies.filter((movie) =>
      movie.genres.includes("Comedy"),
    );
  }

  if (filterText) {
    displayMovies = displayMovies.filter((movie) =>
      movie.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  }

  return (
    <div className="movies-page">
      <h1>Movies Page</h1>
      <div className="movies-filter">
        <input
          type="text"
          placeholder="Filter movies..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button onClick={() => setComedyOnly(!comedyOnly)}>
          {comedyOnly ? "Show All" : "Comedy Only"}
        </button>
      </div>
      {displayMovies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          selected={movie === selectedMovie}
          onSelected={movie => setSelectedMovie(movie)}
          // onSelected={setSelectedMovie}
        />
      ))}
    </div>
  );
}
