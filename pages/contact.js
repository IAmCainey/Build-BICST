// Components
import Head from "next/head";
import Layout from "../layouts/main";
import Link from "next/link";

// Styling
import style from "../css/contact.module.css";

export default function Contact() {
  const pageTitle = "Contact Us - BICST";
  const description =
    "Barrow Island Community Sports Trust is a place for the community to come together and have fun.";
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

      <div>
        <h2>contact us</h2>
        <p>
          <span className={style.span}>by phone : </span>
          <em className={style.em}>01229 820470</em>
        </p>
        <p>
          <span className={style.span}>by email : </span>
          <em className={style.em}>
            <Link href="mailto:bicstrust@gmail.com">
              <a>bicstrust@gmail.com</a>
            </Link>
          </em>
        </p>
        <p>
          <span className={style.span}>by letter </span>
          <br />
          <em className={style.em}>
            Barrow Island Community Sports Trust ltd. <br />
            Cavendish Park, Barrow Island, Cumbria.
          </em>
        </p>
        <p>
          <span className={style.span}>by social </span>
          <em className={style.em}></em>
        </p>
      </div>
    </Layout>
  );
}
