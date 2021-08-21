//components
import TopNav from '../components/topnav'
import Footer from '../components/footer'

//styling

const MainLayOut = props => {
    return (
        <div>
            <TopNav />
            {props.children}
            <Footer />
        </div>
    )
}

export default MainLayOut