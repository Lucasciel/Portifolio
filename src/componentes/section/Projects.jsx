import Project from '../elements/project'
import style from './Projects.module.css'
import ccxp from '../../images/ccxp.svg'
import google from '../../images/google.svg'
import landingpage from '../../images/landingpage.svg'
import previsao from '../../images/previsao.svg'
import landingpageForm from '../../images/landingpageForm.svg'
import oldPortifolio from '../../images/oldPortifolio.svg'
import DevNews from '../../images/DevNews.png'

function Projects() {
    return (
        <div className={style.projects}>
            <h1 id='Projetos'>Projetos</h1>

            <div className={style.projetos}>
                <Project
                    image={DevNews}
                    link='https://desafiodnchtml.netlify.app/'
                    title='DevNews'
                    description='Site com noticias sobre tecnologia'
                    text='aaaa'
                />
                <Project
                    image={ccxp}
                    link='https://main--ccxlanding.netlify.app/'
                    title='Projeto CCXP'
                    description='Uma landing page de um evento com um contador regressivo'
                    text='aaaa'
                    linkb='https://main--ccxlanding.netlify.app/'
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
                <Project
                    image={landingpageForm}
                    link='https://clinquant-centaur-85180c.netlify.app/'
                    title='Landing-Page com formulario'
                    description='ultilizando banco de dados e envio de formulario'
                    text='aaaa'
                />
                <Project
                    image={oldPortifolio}
                    link='https://portfolio-one-blond-77.vercel.app/'
                    title='Portifolio antigo'
                    description='meu primeiro portifolio desenvolvido '
                    text='aaaa'
                />

            </div>

        </div>
    )
}

export default Projects