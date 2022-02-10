// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'
import style from '../../styles/bookings.module.scss'


export default function MeetingRoom() {
    return (
        <Layout>
            <Head>
                <title>Meeting Room Bookings @ BICST</title>
            </Head>

            <div className='flex'>
                <div>
                    <h2>Meeting Room Booking Form</h2>
                    <p><strong>coming soon</strong></p>
                </div>

                <div>
                </div>
            </div>
        </Layout>
    )
}