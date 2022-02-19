// Components
import Head from 'next/head'
import Layout from '../layouts/main'

// Styling


export default function Contact() {

    const pageTitle = 'Contact Us - BICST'
    const description = 'Barrow Island Community Sports Trust is a place for the community to come together and have fun.'
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

            <div>
                <h1>coming soon</h1>
            </div>
        </Layout >
    )
}