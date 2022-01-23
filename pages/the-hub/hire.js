// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'

const bookings = () => {
    return (
        <Layout>
            <Head>
                <title>Hall Hire @  The Community Hub</title>
            </Head>
            <div className='flex'>
                <div>
                    <h1>hub hire</h1>
                </div>
                <div className='align-right'>
                    <Link href="/the-hub/bookings">
                        <a className='btn'>Booking Form</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default bookings