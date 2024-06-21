import style from './Projects.module.css'
import ButtonA from './ButtonA'



function Project({image,link, title, description}) {
    return (
        <div className={style.project}>

            <a href={link}><img width={350} src={image}></img></a>
            <h3>{title}</h3>
            <p>{description}</p>
            
            <ButtonA text='Clique aqui '/> 
        </div>
    )
}

export default Project