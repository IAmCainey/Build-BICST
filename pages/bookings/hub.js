// Components
import Head from "next/head";
import Link from "next/link";

// Styling
import Layout from "../../layouts/main";
import style from "../../css/bookings.module.css";

export default function Hub() {
  const pageTitle = "Booking the Hub - BICST";
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
          <div className="notice">
            <h2>Please Note</h2>
            <p>When booking a party at the hub the follow rule apply.</p>
            <p>
              You have access to the hub one hour prior to your booking time to
              setup and do what you need to do. You also have one hour after to
              clean and be out ready for any other events.
              <br />
              If more time is requied you will need to book the hall further and
              pay for the time.
            </p>
            <p></p>
          </div>
          <h2>Hub Booking</h2>
          <p>
            Before booking the hub, please take the time to read and understand
            the terms set out by the trust.
          </p>
          <Link href="/terms">
            <a>Terms & Conditions</a>
          </Link>

          <p>
            Please <b>do not</b> use this bookings page for the following:
          </p>
          <ul>
            <li>Weddings</li>
            <li>Christenings</li>
            <li>Training Days</li>
          </ul>
          <p>
            If your looking to book any of the above please contact us for
            prices. If catering is required please make sure you contact us
            before hand.
          </p>
          <p>If you have any questions please feel free to contact us.</p>

          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </div>

        <div>
          <iframe
            src="https://koalendar.com/e/hub-hire?embed=true"
            width="100%"
            height="800px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
