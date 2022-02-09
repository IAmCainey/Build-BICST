// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'
import style from '../../styles/bookings.module.scss'


export default function Hub() {
    return (
        <Layout>
            <Head>
                <title>Bookings @ BICST</title>
            </Head>

            <div className='flex'>
                <div>
                    <h2>Hub Booking Form</h2>
                    <p>please use the form only for booking the hub</p>
                </div>

                <div>
                    <iframe src="https://koalendar.com/e/hub-booking-form?embed=true" width="100%" height="800px" frameBorder="0"></iframe>
                </div>
            </div>
        </Layout>
    )
}