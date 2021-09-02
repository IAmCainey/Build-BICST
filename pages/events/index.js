// Next imports
import Head from 'next/head'
import Link from 'next/link'

// Styling
import style from '../../styles/events.module.scss'
import Layout from '../../layouts/main'


// Sanity imports
import { groq } from "next-sanity";
import { getClient } from "../../utils/sanity";


const query = groq`*[_type == "events"] | order(publishedAt asc) {
    title,
    _updatedAt,
    publishedAt,
    content,
    slug,
  }`;

export default function aboutTheHub(props) {
    const events = props.events[0];
    return (
        <Layout>
            <Head>
                <title>Community Events - BICST</title>
            </Head>
            <section id="about">
                <h1>Hub Events</h1>
                <h4>Coming Soon</h4>

                <div className={style.content}>

                    <h4>{events.title}</h4>
                    <span className={style.date}>{events.publishedAt}</span>

                    <p className={style.body}>
                        {events.content}
                    </p>

                </div>

            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    let response = await getClient().fetch(query);

    return {
        props: {
            events: response || null,
        },
        revalidate: 5,
    };
}