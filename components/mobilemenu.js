// styling
import style from "../css/mobilemenu.module.css";

// Imports
import Link from "next/link";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileMenu() {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>BICST</h3>
      </div>
      <div className={style.burger_2}>
        <GiHamburgerMenu className={style.burger}></GiHamburgerMenu>

        <div className={style.dropdown}>
          <div className={style.links}>
            <Link href="/">
              <a className={style.link}>Home</a>
            </Link>
            <Link href="/galleries">
              <a className={style.link}>Gallery</a>
            </Link>
            <Link href="/bookings">
              <a className={style.link}>Bookings</a>
            </Link>
            <Link href="/contact">
              <a className={style.link}>contact</a>
            </Link>
            <Link href="/bookings">
              <a className="btn-reverse text-center">Book Now</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
