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
                <p>Cursando o Ensino Médio</p>
            </div>

            <div className={style.container}>
                <h3>2019</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2}></div>
                </section>
                <p>Cursos de tecnologia</p>
            </div>

            <div className={style.container}>
                <h3>2020</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2}></div>
                </section>
                <p>Enem</p>
            </div>

            <div className={style.container}>
                <h3>2021</h3>
                <section className={style.lineborder}>
                    <div className={style.lineborder0}></div>
                    <div className={style.lineborder1}></div>
                    <div className={style.lineborder2n}></div>
                </section>
                <p>Terminei o Ensino médio</p>
            </div>


        </div>
    )
}

export default TimelineE