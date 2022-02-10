// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'
import style from '../../styles/bookings.module.scss'


export default function Pitch() {
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
                </div>
            </div>
        </Layout>
    )
}