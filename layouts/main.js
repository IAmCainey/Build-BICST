//components
import TopNav from "../components/topnav";
import MobileMenu from "../components/mobilemenu";
import PageHero from "../components/pageHero";
import Footer from "../components/footer";
import CookieConsent from "../components/cookies";
import { useEffect, useState } from "react";
import { ImArrowUp } from "react-icons/im";

// Styling
import style from "../styles/layout.module.scss";

export default function MainLayOut({
  children,
  pageTitle,
  description,
  ...props
}) {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TopNav />
      <MobileMenu />
      <PageHero />
      <div className={style.container}>{children}</div>
      <Footer />
      {showBtn && (
        <button onClick={scrollToTop} className="scrollToTop">
          <ImArrowUp />
        </button>
      )}
      <CookieConsent />
    </>
  );
}
