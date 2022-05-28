import style from './Container.module.css'

export const Container = ({title, children})=>{
  return (
    <div className={style.container}>
    {children}
    </div>
  )
}
