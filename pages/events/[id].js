// Supabase
import { supabase } from "../../utils/supabase"

// Components
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

// Styling
import Layout from '../../layouts/main'

const EventDetails = ({ event }) => {
    return (
        <Layout>
            <Head>
                <title>BICST - {event.title}</title>
            </Head>
            <h1>{event.title}</h1>
            <strong>{event.date} | {event.time}</strong>
            <p>
                {event.body}
            </p>

            <button className="btn" onClick={() => Router.back()}> Go Back</button>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const { data: events } = await supabase.from('event').select('id')

    const paths = events.map(({ id }) => ({
        params: {
            id: id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { id } }) => {
    const { data: event } = await supabase.from('event').select('*').eq('id', id).single()

    return {
        props: {
            event
        }
    }
}

export default EventDetails