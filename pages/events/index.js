// Next imports
import Head from 'next/head'
import Link from 'next/link'

// Styling
import style from '../../styles/events.module.scss'
import Layout from '../../layouts/main'


// Sanity imports
import sanity from '../../lib/sanity'

const query = `*[_type == "events "] {
    title
}
`;


const Events = ({ events }) => {
    return (

        <Layout>
            <Head>
                <title>Community Events @ BICST</title>
            </Head>
            <section id="about">
                <h1>Hub Events</h1>
                <h4>Coming Soon</h4>

                <ul className={style.content}>
                    {events.map(event => (
                        <li key={event._id}>
                            <Link href="/events/[id" as={`/events/${event._id}`}>
                                <a>
                                    {events.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>

            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const events = await sanity.fetch(query);
    return {
        props: { events }
    }
}

export default Events