// Components
import Head from "next/head";
import Layout from "../layouts/main";

// Styling
import style from "../styles/contact.module.scss";

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
        <h1>contact us</h1>
        <div className={style.contactCards}>
          <div className={style.card}>
            <span className={style.span}>by phone : </span>
            <em className={style.em}>01229 820470</em>
          </div>
          <div className={style.card}>
            <span className={style.span}>by email : </span>
            <em className={style.em}>bicstrust@gmail.com</em>
          </div>
          <div className={style.card}>
            <span className={style.span}>by letter </span>
            <p>
              <em className={style.em}>
                Barrow Island Community Sports Trust ltd. Cavendish Park, Barrow
                Island, Cumbria.
              </em>
            </p>
          </div>
          <div className={style.card}>
            <span className={style.span}>by social </span>
            <em className={style.em}></em>
          </div>
        </div>
      </div>
    </Layout>
  );
}
