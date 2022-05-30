import { PageHeading } from "components/PageHeding/PageHading";
import { NavLink } from "react-router-dom";
import s from './CastRevievMenu.module.css';

export function CastRevievMenu() {
  return (
    <div className={s.menu}>
      <PageHeading>Additional information</PageHeading>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to='cast'>Cast</NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to='revies'>Reviews</NavLink>
        </li>
      </ul>
    </div>
  )
}