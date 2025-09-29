
import style from './Button.module.css'



function ButtonA({text, linkb}) {
    return (
        <div className={style.ButtonA}>
            <a href={linkb}><button>{text}</button></a>
            
        </div>
    )
}

export default ButtonA