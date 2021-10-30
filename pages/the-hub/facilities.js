// Components
import Head from 'next/head'


// Styling
import Layout from '../../layouts/main'

const pageTitle = `The Hubs Fasilities`

const aboutTheHub = () => {
    return (
        <Layout>
            <Head>
                <title>The Facilities @ The Community Hub</title>
            </Head>
            <section id="about">
                <h1>fasilities</h1>
            </section>
        </Layout>
    )
}

export default aboutTheHub