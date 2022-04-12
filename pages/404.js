// Components
import Head from "next/head";
import Router from "next/router";

// Styling
import style from "../css/error.module.css";

export default function Custom404() {
  const pageTitle = "Error 404 - BICST";

  return (
    <div className={style.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>{pageTitle}</title>
      </Head>
      <div>
        <h1 className={style.title}>
          <span className={style.span}>error</span> | 404
        </h1>
        <h4>This page your looking for, can not be found</h4>
        <p>Go back, do not pass go</p>

        <button className="btn" onClick={() => Router.back()}>
          {" "}
          Go Back
        </button>
      </div>
    </div>
  );
}
