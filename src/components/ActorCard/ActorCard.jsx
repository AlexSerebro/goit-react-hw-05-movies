import PropTypes from 'prop-types';
import s from './ActorCard.module.css';

export  function ActorCard({ actor }) {
  const { character, name, profile_path } = actor;
  return (
    <div className={s.actorCard}>
      <img
        className={s.picture}
        src={`https://image.tmdb.org/t/p/w342${profile_path}`}
        alt={name}
      />
      <div className={s.info}>
        <span className={s.name}>{name}</span>
        <span className={s.name}>Character: {character}</span>
      </div>
    </div>
  );
}

ActorCard.propTypes = {
  actor: PropTypes.object,
};
