// Components
import Link from 'next/link'

export default function NextEvents({ posts }) {
    return (
        <div>
            <h1>this is the events lists page</h1>

            {
                posts.nodes.map(post => {
                    return (
                        <ul key={post.slug}>
                            <li><Link href={`/events/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link></li>
                        </ul>
                    )
                })
            }

        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://wp.paulcaine.co.uk/bicst/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query MyQuery {
                posts {
                  nodes {
                    title
                    slug
                  }
                }
              }
    `
        })
    })

    const json = await res.json()

    return {
        props: {
            posts: json.data.posts,
        }
    }

}