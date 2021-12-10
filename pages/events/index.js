// Suabase
import { supabase } from '../../utils/supabase'

// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'

const title = 'BICST - Hub Events'
const description = 'TBarrow Island Communiy Sports Trust events.'


export default function Events({ events }) {
    console.log({ events })
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h2>Events</h2>

            <div>
                {events.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                        <a>
                            {event.title}
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const { data: events } = await supabase.from('event').select('*')

    return {
        props: {
            events,
        }
    }
}