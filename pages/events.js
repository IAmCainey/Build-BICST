// Compontents


// Layout
import MainLayout from '../layouts/main'

// Styling
import style from '../styles/layout.module.scss'


const Events = () => {
    return (
        <MainLayout>
            <div className={style.container}>
                <h1>here is the events page</h1>
            </div>
        </MainLayout>
    )
}

export default Events