// Components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// Styling
import Layout from '../../layouts/main'
import Bookings from '../../styles/bookings.module.scss'

// Images
import Hall from '../../public/images/facilities/IMG_0850.JPG'
import Pitch from '../../public/images/pitches/1.jpg'

const bookings = (props) => {

    const pageTitle = 'Bookings - BICST'
    const description = 'Barrow Island Community Sports Trust, please make sure to read and understand the terms of use setout by the trust.'
    const twitterHandle = '@bicstrust'

    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />

                <meta name="description" content={description} />
                <title>{pageTitle}</title>
            </Head>
            <h1>bookings</h1>
            <section className={Bookings.container}>
                <div className={Bookings.card}>
                    <Image
                        className={Bookings.img}
                        src={Hall}
                        alt='this is an alt tag'
                    />
                    <h4>hall hire</h4>
                    <p className={Bookings.text}>
                        Looking to book the hubs community hall for a party, function or event.
                    </p>

                    <div className='my-md'>
                        <Link href="/bookings/hub">
                            <a className='btn'>Book Now</a>
                        </Link>
                    </div>
                </div>
                <div className={Bookings.card}>
                    <Image
                        className={Bookings.img}
                        src={Pitch}
                        alt='this is an alt tag'
                    />
                    <h4>Pitch Hire</h4>
                    <p className={Bookings.text}>
                        Looking to book the hubs community hall for a party, function or event.
                    </p>
                    <div className='my-md'>
                        <Link href="/bookings/pitch">
                            <a className='btn'>Book Now</a>
                        </Link>
                    </div>
                </div>
                <div className={Bookings.card}>
                    <Image
                        className={Bookings.img}
                        src={Pitch}
                        alt='this is an alt tag'
                    />
                    <h4>meeting room hire</h4>
                    <p className={Bookings.text}>
                        Looking to book the hubs community hall for a party, function or event.
                    </p>
                    <div className='my-md'>
                        <Link href="/bookings/meeting-room">
                            <a className='btn'>Book Now</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default bookings