// import PropTypes from 'prop-types';
import style from './Container.module.css'

export const Container = ({title, children})=>{
  return (
    <div className={style.container}>
    {children}
    </div>
  )
}

// Container.propTypes = {
//   title: PropTypes.string.isRequired,
// }