// Components
import Head from 'next/head'

// Styling
import Layout from '../../layouts/main'

const title = 'BICST - Hub Events'
const description = 'TBarrow Island Communiy Sports Trust events.'


export default function Events() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h2>Events</h2>
        </Layout>
    )
}