import portfolio from '../../images/portfolio.svg'
import Project from '../elements/project'
import style from './Projects.module.css' 
import ccxp from '../../images/ccxp.svg'
import google from '../../images/google.svg'
import landingpage from '../../images/landingpage.svg'
import previsao from '../../images/previsao.svg'

function Projects() {
    return (
        <div className={style.projects}>
            <h1 id='Projetos'>Projetos</h1>

            <div className={style.projetos}>
                <Project
                    image={ccxp}
                    link='https://main--ccxlanding.netlify.app/'
                    title='Projeto CCXP'
                    description='Uma landing page de um evento com um contador regressivo'
                    text='aaaa'
                />
                <Project
                    image={google}
                    link='https://google-three-liard.vercel.app/'
                    title='Google-Clone'
                    description='Processo de recriação do google com react, html e css'
                    text='aaaa'
                />

                <Project
                    image={landingpage}
                    link='https://main--projetolandingpagett.netlify.app/'
                    title='Projeto landing page' 
                    description='Projeto de desenvolvimento para aperfeiçoamento'
                    text='aaaa'
                />
                <Project
                    image={previsao}
                    link='https://projeto-api-lucas.netlify.app/'
                    title='Projeto Previsão do tempo'
                    description='consumo de API para obter previsão do tempo'
                    text='aaaa'
                />
            </div>

        </div>
    )
}

export default Projects