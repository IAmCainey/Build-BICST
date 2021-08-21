// Components
import Footer from '../components/footer'
import TopNav from '../components/topnav'

// Styling'

const LandingLayout = props => {
    return (
        <div>
            <TopNav />
            {props.children}
            <Footer />
        </div>
    )
}

export default LandingLayout