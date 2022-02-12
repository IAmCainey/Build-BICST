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
                    <h2>Hub Booking</h2>
                    <p>Befor booking the hub, please take the time to read and understand the terms set out by the trust.</p>
                    <Link href='/terms'>
                        <a>
                            Terms & Conditions
                        </a>
                    </Link>

                    <p>
                        Please do not use this bookings page for the following:
                    </p>
                    <ul>
                        <li>Weddings</li>
                        <li>Christenings</li>
                        <li>Training Days</li>
                    </ul>
                    <p>
                        If your looking to book any of the above please contact us for prices.
                        If catering is required please make sure you contact us before hand.
                    </p>
                    <p>If you have any questions please feel free to contact us.</p>

                    <Link href='/contact'>
                        <a>
                            Contact Us
                        </a>
                    </Link>
                </div>

                <div>
                    <iframe src="https://koalendar.com/e/hub-hire?embed=true" width="100%" height="800px" frameBorder="0"></iframe>
                </div>
            </div>
        </Layout>
    )
}