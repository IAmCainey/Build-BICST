import { useEffect, useState } from "react";

import { ImArrowUp } from "react-icons/im";

export default function ScroolToTop() {
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
      {showBtn && (
        <button onClick={scrollToTop} className="scrollToTop">
          <ImArrowUp />
        </button>
      )}
    </div>
  );
}
