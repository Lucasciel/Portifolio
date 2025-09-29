import style from './TimelineE.module.css'

function TimelineE() {
    return (
        <div className={style.timelinE}>
            <div className={style.container}>
                <h3>2018</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0n}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2}></div>
                </section>
                <p>Nasce minha paixão pela tecnologia, onde começo a planejar meu futuro como profissional da tecnologia</p>
            </div>

            <div className={style.container}>
                <h3>2019</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2}></div>
                </section>
                <p>Começo do meu aprendizado na tecnologia, pacotes office, sistemas operacionais</p>
            </div>

            <div className={style.container}>
                <h3>2021</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2}></div>
                </section>
                <p>Trabalhos voluntários de criação de sites para empresas selecionadas, Bootcamp instensivo de Engenheiro de softwere</p>
            </div>

            <div className={style.container}>
                <h3>2025</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2n}></div>
                </section>
                <p>Graduado em Ciencia da Computação, Começo da minha acrreira como Analista de sistemas.</p>
            </div>


        </div>
    )
}

export default TimelineE