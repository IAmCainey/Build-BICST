import Head from 'next/head';
import Link from 'next/link';

// data
import { getAllPosts } from '../../lib/api';

const Blog = ({ allPosts: { edges } }) => (
    <div>
        <Head>
            <title>A Wordpress buils!</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
            <div>
                <section>

                    {edges.map(({ node }) => (
                        <div key={node.id}>
                            <div>
                                <div>
                                    <h2>{node.title}</h2>
                                    <div>
                                        {node.excerpt}
                                    </div>
                                    <div>
                                        <Link href={`/blog/${node.slug}`}>
                                            <a><button>read more</button></a>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </main>
    </div>
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