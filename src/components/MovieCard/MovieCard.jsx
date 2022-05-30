import PropTypes from 'prop-types';
import s from '.MovieCard.module.css';

export function MovieCard({ movie }) {
  const { title, poster_patch, popularity, overview, genres } = movie;

  return (
    <div className={s.MovieCard}>
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={`poster of ${title}`}
        className={s.poster} />
      <h2>{title}</h2>
      <span>User score {Math.round(popularity)}</span>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{ genres.map(genre => genre.name).join(', ')}</p>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}

