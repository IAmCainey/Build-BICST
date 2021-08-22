// Compontents
import Head from 'next/head'
import Link from 'next/link'

// Layout
import MainLayout from '../../layouts/main'

// Styling
import style from '../../styles/layout.module.scss'

// Data



const Events = () => (
    <MainLayout>
        <Head>
            <title>Community Events - BICST</title>
        </Head>
        <div className={style.container}>
            <h1>events</h1>
        </div>
    </MainLayout>
)

export default Events