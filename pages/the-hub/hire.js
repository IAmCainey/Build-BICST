// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'

const bookings = (props) => {
    return (
        <Layout>
            <Head>
                <title>Hall Hire @  The Community Hub</title>
            </Head>
            <div className='flex'>
                <div>
                    <h1>hub hire</h1>
                    <h4>short term</h4>

                    <p>For short term bookings this is,</p>

                    <ul className='my-md'>
                        <li>parties</li>
                        <li>meeting</li>
                        <li>events</li>
                    </ul>

                    <p>To book for the short term, please use our booking system starting with the booking form</p>

                    <h4 className='tm-lg'>long term</h4>

                    <p>This option is ideal for groups,</p>

                    <ul className='my-md'>
                        <li>dancers</li>
                        <li>drama</li>
                        <li>weekly / monthly meetups</li>
                    </ul>

                    <p>To book the hall for the long term this needs to be done in person.</p>
                    <p>please make sure you read the following before booking the hall out!</p>
                </div>


                <div className='tm-lg'>
                    <Link href="/the-hub/bookings">
                        <a className='btn'>Hall Hire</a>
                    </Link>
                    <Link href="/the-hub/bookings">
                        <a className='btn lm-md'>Pitch Hire</a>
                    </Link>
                </div>
            </div>
        </Layout >
    )
}

export default bookings