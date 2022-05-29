import s from './PageHeading.module.css';

export  function PageHeading({ text }) {
  return <h2 className={s.title}>{text}</h2>;
}