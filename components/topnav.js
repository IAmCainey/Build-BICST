// Components
import Link from 'next/link'
import Image from 'next/image'

// Styling
import style from '../styles/topnav.module.scss'

// Images
import logo from '../public/images/logo.png'


const topNav = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <div>
                    <Link href="/">
                        <a className={style.titleLink}>
                            <Image
                                src={logo}
                                alt="Barrow Island Community Sports Trust"
                                className={style.logo}
                                placeholder="blur"
                                height={75}
                                width={250}
                            />
                        </a>
                    </Link>
                </div>
                <div className={style.linkBlock}>
                    <Link href="/">
                        <a className={style.link}>
                            home
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={`${style.link} ${style.drop}`}>
                            the hub
                            <div className={style.dropdown}>
                                <div className={style.dropdown_content}>
                                    <Link href="/galleries">
                                        <a className={style.link}>
                                            Gallories
                                        </a>
                                    </Link>
                                    <Link href="/bookings">
                                        <a className={style.link}>
                                            Bookings
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={style.link}>
                            Contact Us
                        </a>
                    </Link>
                    <Link href="/bookings">
                        <a className='btn-reverse lm-md'>Book Now</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default topNav