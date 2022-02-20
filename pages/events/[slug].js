// Components
import Link from 'next/link'

//Layout & Styling
import Layout from '../../layouts/main'
import style from '../../styles/events.module.scss'

export default function Event(data) {

    const post = data.post
    return (
        <Layout>
            <div className={style.single}>
                <div>
                    <h1>{post.title}</h1>
                    <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
                </div>

                <div>
                    <img className={style.f__image} src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />

                    <p className={style.eventInfo}>
                        Event Date : <span className={style.span}>{post.event.eventDate}</span>
                    </p>
                    <p className={style.eventInfo}>
                        Start Time : <span className={style.span}>{post.event.eventStartTime}</span>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('http://wp.paulcaine.co.uk/bicst/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query SinglePost($id: ID!, $idType: PostIdType!) {
                post(id: $id, idType: $idType) {
                    title
                    slug
                    content
                    featuredImage {
                        node {
                            sourceUrl
                            altText
                        }
                    }
                    event {
                        eventDate
                        eventStartTime
                      }
                }
            }
    `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }
}

export async function getStaticPaths() {

    const res = await fetch('http://wp.paulcaine.co.uk/bicst/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                  nodes {
                    slug
                    title
                    content
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    event {
                        eventDate
                        eventStartTime
                      }
                  }
                }
              }
    `
        })
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}