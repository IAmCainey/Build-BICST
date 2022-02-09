// Components
import Footer from '../components/footer'
import TopNav from '../components/topnav'
import MobileMenu from '../components/mobilemenu'

import CookieConsent from '../components/cookies'

// Styling

const LandingLayout = props => {
    return (
        <div>
            <TopNav />
            <MobileMenu />
            {props.children}
            <Footer />
            <CookieConsent />
        </div>
    )
}

export default LandingLayout