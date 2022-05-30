import PropTypes from 'prop-types';
import s from './ActorCard.module.css';

export function ActorCard({ actor }) {
  const { character, name, profile_path } = actor;
  return (
    <div className={s.ActorCard}>
      <img src={`https://image.tmdb.org/t/p/w342${profile_path}`}
        alt={name}
        className={s.picture} />
      <div className={info}>
        <p className={s.name}>{name}</p>
        <p className={s.name}>Character: { character}</p>
      </div>
    </div>
  )
}

ActorCard.propTypes = {
  actor: PropTypes.object,
};
