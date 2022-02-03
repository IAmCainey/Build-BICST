// Components
import Link from 'next/link'
import groq from 'groq'

import client from '../client'

// Styling
import Layout from '../layouts/main'

const Index = ({ posts }) => {
    return (
        <Layout>
            {posts.length > 0 && posts.map(
                ({ _id, title = '', slug = '', publishedAt = '' }) =>
                    slug && (
                        <li key={_id}>
                            <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                                <a>{title}</a>
                            </Link>{' '}
                            <p>
                                Posted : ({new Date(publishedAt).toDateString()})
                            </p>
                        </li>
                    )
            )}
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
        props: {
            posts
        }
    }
}

export default Index