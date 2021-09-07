//components
import TopNav from '../components/topnav'
import PageHero from '../components/pageHero'
import Footer from '../components/footer'

// Styling
import style from '../styles/layout.module.scss'

//styling

const MainLayOut = props => {
    return (
        <div>
            <TopNav />
            <PageHero />
            <div className={style.container}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayOut