// Components
import { pageTitle } from "next/document";

// Styling
import style from "../css/pageHero.module.css";

const pageHero = (props) => {
  return (
    <section className={style.hero}>
      <div className={style.overlay}>
        <div className={style.container}>
          <h1 className={style.title}>
            Barrow Island, <br />
            Community Sports Trust
          </h1>
          <span className="light-text">
            A place that brings the community together
          </span>
        </div>
      </div>
    </section>
  );
};

export default pageHero;
