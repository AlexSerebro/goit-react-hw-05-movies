import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  let location = useLocation();
  // console.log(movies);
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
