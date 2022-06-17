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

      <ul>
        {events.map((event, i) => (
          <li key={i}>
            <a href={`/events/${event.slug}`}>{event.title}</a>
            <p>{event.eventDate}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        events(orderBy: eventDate_DESC) {
          title
          slug
          description {
            raw
          }
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
