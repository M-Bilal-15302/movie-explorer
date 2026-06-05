import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
  // check for no movies
  if (movies.length === 0) {
    return <div className="movie-list">No movies found</div>
  }
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList