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
                <title>Pitch Bookings @ BICST</title>
            </Head>

            <div className='flex'>
                <div>
                    <h2>Pitch Booking Form</h2>
                    <p><strong>coming soon</strong></p>
                </div>

                <div>
                </div>
            </div>
        </Layout>
    )
}