// Components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// Styling
import Layout from '../../layouts/main'



export default function Hub() {
    return (
        <Layout>
            <Head>
                <title>Booking Confirmed @ BICST</title>
            </Head>

            <div className='flex centered'>
                <div>

                    <h1>
                        Booking Confirmed
                    </h1>
                    <p>
                        Your booking is now in our calender. <br />
                        Any questions please contact us @
                        <Link href='/contact'>
                            <a>
                                HERE
                            </a>
                        </Link>
                    </p>
                </div>
                <div>
                    <Image
                        src='/../public/images/confirmed.svg'
                        alt='Booking Confirmed'
                        layout='fill'
                    />
                </div>
            </div>
        </Layout>
    )
}