// Styling
import style from '../styles/pageHero.module.scss'


const pageHero = (props) => {

    return (
        <section className={style.hero}>
            <div className={style.container}>
                <h1 className={style.title}></h1>
                <span></span>
            </div>
        </section>
    )
}

export default pageHero