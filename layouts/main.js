//components
import TopNav from '../components/topnav'
import Footer from '../components/footer'

// Styling
import style from '../styles/layout.module.scss'

//styling

const MainLayOut = props => {
    return (
        <div>
            <TopNav />
            <div className={style.container}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayOut