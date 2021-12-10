//components
import TopNav from '../components/topnav'
import PageHero from '../components/pageHero'
import Footer from '../components/footer'

// Styling
import style from '../styles/layout.module.scss'

export default function MainLayOut(props) {
    return (

        <>
            <TopNav />
            <PageHero />
            <div className={style.container}>
                {props.children}
            </div>
            <Footer />
        </>

    )
}
