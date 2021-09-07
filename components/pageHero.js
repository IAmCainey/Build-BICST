// Styling
import style from '../styles/pageHero.module.scss'


const pageHero = () => {
    return (
        <section className={style.hero}>
            <div className={style.container}>
                <h1>page title</h1>
                <span>page description</span>
            </div>
        </section>
    )
}

export default pageHero