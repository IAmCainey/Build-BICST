// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../layouts/main'
import style from '../styles/sports.module.scss'

const title = 'BICST - Sporting Teams'


export default function Sports() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>

            <div>
                <h2>Marsh Hornets Rugby</h2>
            </div>
        </Layout>
    )
}