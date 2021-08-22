// Components
import Head from 'next/head';
import Link from 'next/link';


// Layout
import Layout from '../../layouts/main'
import style from '../../styles/blog.module.scss'


// data
import { getAllPosts } from '../../lib/api';


const Blog = ({ allPosts: { edges } }) => (
    <Layout>
        <Head>
            <title>News from - Barrow Island Community</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={style.container}>
            <div className={style.pageTitle}>
                <h1>Community Articles</h1>
            </div>
            <section className={style.cardGroup}>

                {edges.map(({ node }) => (
                    <div key={node.id}>
                        <div>
                            <div className={style.card}>
                                <h2>{node.title}</h2>
                                <div

                                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                                />
                                <div>
                                    <Link href={`/blog/${node.slug}`}>
                                        <a><button className={style.btn}>read more</button></a>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    </Layout>
);

export default Blog;

export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: {
            allPosts
        }
    };
}