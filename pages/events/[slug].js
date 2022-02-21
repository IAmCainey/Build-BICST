// Components
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineUser, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineTicket } from 'react-icons/hi'



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

                <div className={style.right}>
                    {/* <Image
                        className={style.f__image}
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText}
                        width='300'
                        height='200'
                    /> */}

                    <p className={style.eventInfo}>
                        <AiOutlineCalendar className='light-text' />  Event Date : <span className={style.span}>{post.event.eventDate}</span>
                    </p>
                    <p className={style.eventInfo}>
                        <AiOutlineClockCircle className='light-text' />  Start Time : <span className={style.span}>{post.event.eventStartTime}</span>
                    </p>
                    <p className={style.eventInfo}>
                        <AiOutlineUser className='light-text' />  Contact Name : <span className={style.span}>{post.event.contactName}</span>
                    </p>
                    <p className={style.eventInfo}>
                        <AiOutlinePhone className='light-text' />  Number : <span className={style.span}>{post.event.contactNumber}</span>
                    </p>
                    <p className={style.eventInfo}>
                        <AiOutlineMail className='light-text' />  Email : <span className={style.span}><Link href={`mailto:${post.event.contactEmail}`}><a className={style.link}>{post.event.contactEmail}</a></Link></span>
                    </p>
                    <p className={style.eventInfo}>
                        <HiOutlineTicket className='light-text' />  Tickets : <span className={style.span}><Link href={`${post.event.getTickets}`}><a className={style.link}>Get Tickets</a></Link></span>
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
                        contactEmail
                        contactName
                        contactNumber
                        getTickets
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
                        contactEmail
                        contactName
                        contactNumber
                        getTickets
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