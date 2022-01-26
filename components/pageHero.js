// Components
import { pageTitle } from 'next/document'

// Styling
import style from '../styles/pageHero.module.scss'


const pageHero = (props) => {
    return (
        <section className={style.hero}>
            <div className={style.container}>
                <h1 className={style.title}>Barrow Island, <br />Community Sports Trust</h1>
                <span className='light-text'>A place that brings the community together</span>
            </div>
        </section>
    )
}

export default pageHero