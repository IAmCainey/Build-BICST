//components
import TopNav from '../components/topnav'
import MobileMenu from '../components/mobilemenu'
import PageHero from '../components/pageHero'
import Footer from '../components/footer'
import CookieConsent from '../components/cookies'

// Styling
import style from '../styles/layout.module.scss'

export default function MainLayOut(props) {
    return (

        <>
            <TopNav />
            <MobileMenu />
            <PageHero />
            <div className={style.container}>
                {props.children}
            </div>
            <Footer />
            <CookieConsent />
        </>

    )
}
