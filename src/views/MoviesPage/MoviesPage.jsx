import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieByQuery } from '../../services/movies-api'

import { MovieSearchForm } from "components/SearchMovie/SearchMovie";

export function MoviesPage() {
  const [movies, setMovies] = useState(null)

  let location = useLocation();
  console.log(location);

  return (
    <>
    <MovieSearchForm/>
    </>
  )
}