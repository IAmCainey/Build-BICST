// Components
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../apolloClient";

//Layout & Styling
import Layout from "../../layouts/main";
import style from "../../css/events.module.css";

export default function Events({ events }) {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      <ul className={style.cards}>
        {events.map((event, i) => (
          <div key={i}>
            <Link href={`/events/${event.slug}`}>
              <a>
                <li className={style.card}>
                  <h2>{event.title}</h2>
                  <p className={style.description}>{event.description}</p>
                  <p className={style.date}>Event Date : {event.eventDate}</p>
                </li>
              </a>
            </Link>
          </div>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        events(orderBy: eventDate_ASC) {
          title
          slug
          description
          eventDate
        }
      }
    `,
  });
  const { events } = data;
  return {
    props: {
      events,
    },
  };
}
