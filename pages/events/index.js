// Components
import Link from "next/link";

//Layout & Styling
import Layout from "../../layouts/main";
import style from "../../css/events.module.css";

export default function Events({ posts }) {
  return (
    <Layout>
      <h1>Upcoming events</h1>

      <div className={style.cards}>
        {posts.nodes.map((post) => {
          return (
            <div key={post.slug} className={style.card}>
              <h2 className={style.title}>{post.title}</h2>

              <p className={style.text}>{post.event.shortDescription}</p>

              <div className={style.bottom}>
                <div>
                  <Link href={`/events/${post.slug}`}>
                    <a className={style.link}>Read Now</a>
                  </Link>
                </div>
                <div className={style.eventDate}>{post.event.eventDate}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://wp.paulcaine.co.uk/bicst/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query AllEvents {
                posts {
                  nodes {
                    title
                    slug
                    event {
                      eventDate
                      shortDescription
                    }
                  }
                }
              }
    `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
