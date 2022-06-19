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
          <li className={style.card} key={i}>
            <h2>{event.title}</h2>
            <p className={style.description}>{event.description}</p>
            <p className={style.date}>{event.eventDate}</p>
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
