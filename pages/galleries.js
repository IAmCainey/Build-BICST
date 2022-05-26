// Components
import Head from "next/head";
import Image from "next/image";

// Styling
import Layout from "../layouts/main";
import style from "../css/facilities.module.css";

// Images
import One from "../public/images/facilities/IMG_0830.webp";
import Two from "../public/images/facilities/IMG_0835.webp";
import Three from "../public/images/facilities/IMG_0839.webp";
import Four from "../public/images/facilities/IMG_0844.webp";
import Five from "../public/images/facilities/IMG_0847.webp";
import Six from "../public/images/facilities/IMG_0850.webp";
import Seven from "../public/images/facilities/IMG_0856.webp";

const pageTitle = `The Hubs Facilities`;

const Galleries = () => {
  const pageTitle = "The Hubs Gallery - BICST";
  const description =
    "Barrow Island Community Sports Trust, checkout some pictures from events, parties and just of the community";
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
      <section id="about">
        <h1>The Hub</h1>
      </section>

      <section className={style.gallery}>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={One}
            alt="this is an alt tag"
          />
        </div>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={Two}
            alt="this is an alt tag"
          />
        </div>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={Three}
            alt="this is an alt tag"
          />
        </div>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={Four}
            alt="this is an alt tag"
          />
        </div>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={Five}
            alt="this is an alt tag"
          />
        </div>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={Six}
            alt="this is an alt tag"
          />
        </div>
        <div className={style.galleryItem}>
          <Image
            className={style.galleryImg}
            src={Seven}
            alt="this is an alt tag"
          />
        </div>
      </section>

      <section className="my-md">
        <h1>the pitches</h1>
      </section>
    </Layout>
  );
};

export default Galleries;
