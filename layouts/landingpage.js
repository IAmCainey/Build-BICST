// Components
import Footer from "../components/footer";
import TopNav from "../components/topnav";
import MobileMenu from "../components/mobilemenu";

import { useEffect, useState } from "react";

import { ImArrowUp } from "react-icons/im";

import CookieConsent from "../components/cookies";

// Scroll to top
const LandingLayout = (props) => {
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
    <div>
      <TopNav />
      <MobileMenu />
      {props.children}
      <Footer />
      <CookieConsent />
      {showBtn && (
        <button onClick={scrollToTop} className="scrollToTop">
          <ImArrowUp />
        </button>
      )}
    </div>
  );
};

export default LandingLayout;
