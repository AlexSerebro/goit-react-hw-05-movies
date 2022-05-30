import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => (
  <nav className={s.nav}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            isActive ? s.link_active : s.link
          }
        >
          Home
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          to={{
            pathname: 'movies',
            state: 5,
          }}
          className={({ isActive }) =>
            isActive ? s.link_active : s.link
          }
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

