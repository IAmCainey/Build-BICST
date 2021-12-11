// Suabase
import { supabase } from '../../utils/supabase'

// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'
import style from '../../styles/cards.module.scss'

const title = 'BICST - Hub Events'
const description = 'Barrow Island Communiy Sports Trust events.'


export default function Events({ events }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h2>Events</h2>


            {events.map((event) => (

                <div key={event.id} className={style.cards}>
                    <div className={style.card}>

                        <h4>{event.title}</h4>
                        <strong>{event.date}</strong>
                        <p>{event.description}</p>
                        <Link href={`/events/${event.id}`}>
                            <a className="btn">
                                View Event
                            </a>
                        </Link>
                    </div>
                </div>

            ))}
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