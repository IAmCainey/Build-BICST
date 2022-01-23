// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'

const title = 'BICST - Hub Hire Booking'


export default function Bookings() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>

            <div>
                <h2>Hub Booking Form</h2>
            </div>
        </Layout>
    )
}