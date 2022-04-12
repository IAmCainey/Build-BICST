// Components
import Head from "next/head";
import Link from "next/link";

// Styling
import Layout from "../../layouts/main";
import style from "../../css/bookings.module.css";

export default function MeetingRoom() {
  const pageTitle = "Meeting Room Booking - BICST";
  const description =
    "Barrow Island Community Sports Trust, please make sure to read and understand the terms of use setout by the trust.";
  const twitterHandle = "@bicstrust";

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="description" content={description} />
        <title>{pageTitle}</title>
      </Head>

      <div className="flex">
        <div>
          <h2>Meeting Room Booking Form</h2>
          <p>
            <strong>coming soon</strong>
          </p>
        </div>

        <div></div>
      </div>
    </Layout>
  );
}
