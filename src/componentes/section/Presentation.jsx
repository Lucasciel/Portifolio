import {useState, useEffect} from 'react'
import ButtonA from '../elements/ButtonA'
import style from './Presentation.module.css'

function Presentation() {

    const [text, setText] = useState(''); 
    const toRotate = ['Lucas Souza!', 'Desenvolvedor Front End']; 
    const [loop, setLoop] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=> {

        let ticker = setInterval(() => {
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    },[text]) 

    const toType = () => {
        let i = loop % toRotate.length;
        
        let fullText = toRotate[i]
        let updatedText = isDeliting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText); 

        if(!isDeliting && updatedText === fullText) {
            setIsDeliting(true);
            setDelta(period);
        } else if(isDeliting && updatedText === ''){
            setIsDeliting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }   




    return (
        <div className={style.presentation}> 

            <h1 id='Sobremim'>Olá, eu sou {text}</h1>
            <p>Estou no 6° periodo do curso Ciência da Computação e curso Formação em Tecnologia <br/>
                na Escola DNC, com foco em desenvolvimento Web. Tenho um objetivo bem claro de <br/>
                me tornar um desenvolvedor fullstack.Ao longo da minha jornada, pude criar projetos <br/>
                de landing page com formularios integrados,fazendo uso das ferramentas html, css e <br/> 
                javaScript. Ademais, faço uso frequente de Git e Github.Além disso, pude concluir alguns cursos,<br/>
                como: Pacotes office - Esxpert cursos, AI-900 - (Inteligência Artificial) - Senai Faculdade Reges</p>

                <ButtonA text='Saber mais'/>
        </div>
    )
}

export default Presentation