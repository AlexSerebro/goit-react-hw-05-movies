import { useState, useEffect } from "react"; 
import { fetchTrendMovies } from '../../services/movies-api'
import { PageHeading } from "components/PageHeding/PageHading";
import MoviesList from "components/MoviesList/MoviesList";



export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies(1)
      .then(r => setMovies(r))
      .catch(r => console.log(r));
  }, []);
  return (
    <>
      <PageHeading text='Treading today' />
      
      <MoviesList movies={movies}/>
    </>
  )
}