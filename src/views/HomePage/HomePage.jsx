import { useState, useEffect } from "react"; 
import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrendMovies } from '../../services/movies-api'
import { PageHeading } from "components/PageHeding/PageHading";

export function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    fetchTrendMovies().then(setMovie);
  }, [])

  return (
    <>
      <PageHeading text='Treading today' />
      
      {movies && (
        <ul>
          {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}/movies/${movie.id}`}>
              {movie.original_title || movie.original_name}
            </Link>
          </li>
          ))}
        </ul>
      )}
    </>
  )
}