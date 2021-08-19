// Components
import Footer from '../components/footer'

// Styling'

const LandingLayout = props => {
    return (
        <div>
            {props.children}
            <Footer />
        </div>
    )
}

export default LandingLayout