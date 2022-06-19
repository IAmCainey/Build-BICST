// Components
import Image from "next/image";
import Link from "next/link";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";

//Layout & Styling
import Layout from "../../layouts/main";
import style from "../../css/events.module.css";

export default function EventsPage({ event }) {
  return (
    <Layout>
      <div className={style.single}>
        <div>
          <h1>{event.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: event.body.html }}></div>

          <Link href="/events">
            <a className="btn">Link Back</a>
          </Link>
        </div>

        <div className={style.right}>
          <p className={style.eventDate}>{event.eventDate}</p>

          <ul className={style.eventList}>
            <li className={style.eventInfo}>{event.contactName}</li>
            <li className={style.eventInfo}>{event.contactNumber}</li>
            <li className={style.eventInfo}>
              <Link href={`{event.contactEmail}`}>
                <a>{event.contactEmail}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        events {
          slug
        }
      }
    `,
  });
  const { events } = data;
  const paths = events.map((event) => ({
    params: { slug: [event.slug] },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query EventBySlug($slug: String!) {
        events(where: { slug: $slug }) {
          slug
          title
          body {
            html
          }
          eventDate
          contactName
          contactNumber
          contactEmail
        }
      }
    `,
    variables: { slug },
  });
  const { events } = data;
  const event = events[0];
  return { props: { event } };
}
