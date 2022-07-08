// Components
import Footer from "../components/footer";
import TopNav from "../components/topnav";
import MobileMenu from "../components/mobilemenu";
import ScrollToTop from "../components/scrollToTop";

import CookieConsent from "../components/cookies";

// Scroll to top
const LandingLayout = (props) => {
  return (
    <div>
      <TopNav />
      <MobileMenu />
      {props.children}
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default LandingLayout;
