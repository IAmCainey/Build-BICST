// Components
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'

import client from '../../client'

// Styling
import Layout from '../../layouts/main'

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Post = ({ post }) => {
    const {
        title,
        name,
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
                {authorImage && (
                    <div>
                        <Image
                            src={urlFor(authorImage)
                                .width(200)
                                .url()}
                            alt="{name}"
                            width={200}
                            height={150}
                        />
                    </div>
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
  "authorImage": author->image,
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