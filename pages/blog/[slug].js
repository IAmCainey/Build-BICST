import Head from 'next/head';
import Link from 'next/link';

// Styling
import Layout from '../../layouts/main'
import style from '../../styles/blog.module.scss'

// data
import { getAllPostsWithSlug, getPost } from '../../lib/api';


export default function Post({ postData }) {
    if (!postData) {
        return <p>No data could be found for the post...</p>;
    }

    const formatDate = date => {
        const newDate = new Date(date);

        return `${newDate.getDate()}/${newDate.getMonth() + 1
            }/${newDate.getFullYear()}`;
    };

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={style.container}>
                <article>
                    <div>
                        <h1>{postData.title}</h1>
                        <p>{formatDate(postData.date)}</p>
                    </div>
                    <div
                        className={style.content}
                        dangerouslySetInnerHTML={{ __html: postData.content }}
                    />
                </article>
                <div>
                    <Link href='/blog'>
                        <a><button className={style.btn}>Back to Articles</button></a>
                    </Link>
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();

    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const data = await getPost(params.slug);

    return {
        props: {
            postData: data.post
        }
    };
}