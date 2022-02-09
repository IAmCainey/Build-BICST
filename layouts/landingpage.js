// Components
import Footer from '../components/footer'
import TopNav from '../components/topnav'

import CookieConsent from '../components/cookies'

// Styling

const LandingLayout = props => {
    return (
        <div>
            <TopNav />
            {props.children}
            <Footer />
            <CookieConsent />
        </div>
    )
}

export default LandingLayout