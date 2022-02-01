// Components
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'

import client from '../../client'

// Styling
import Layout from '../../layouts/main'



const Post = ({ post }) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body = []
    } = post
    return (
        <Layout>

            <article>
                <h1>{title}</h1>
                <span>By {name}</span>
                {categories && (
                    <ul>
                        Posted in
                        {categories.map(category => <li key={category}>{category}</li>)}
                    </ul>
                )}

                <BlockContent
                    blocks={body}
                    imageOptions={{ w: 320, h: 240, fit: 'max' }}
                    {...client.config()}
                />


            </article>
        </Layout>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  body
}`
export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(query, { slug })
    return {
        props: {
            post
        }
    }
}
export default Post