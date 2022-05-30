import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieByQuery } from '../../services/movies-api'

import { MovieSearchForm } from "components/SearchMovie/SearchMovie";
import MoviesList from "components/MoviesList/MoviesList";

export function MoviesPage() {
  const [movies, setMovies] = useState(null)

  let location = useLocation();
  // console.log(location);
  const url = new URLSearchParams(location.search).get('query')

  useEffect(() => {
    fetchMovieByQuery(url).then(setMovies);
  }, [url])

  return (
    <>
      <MovieSearchForm />
      {movies && <MoviesList movies={movies}/>}
    </>
  )
}