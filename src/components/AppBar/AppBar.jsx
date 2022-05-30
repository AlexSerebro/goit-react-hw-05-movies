import {Navigation} from '../Navigation';
import s from './Appbar.module.css';

export  function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
