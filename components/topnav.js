// Components
import Link from 'next/link'

// Styling
import style from '../styles/topnav.module.scss'


const topNav = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <div>
                    <h4 className={style.h4}>BICST</h4>
                </div>
                <div>
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

                                    <Link href="/the-hub/about">
                                        <a className={style.link}>
                                            About us
                                        </a>
                                    </Link>
                                    <Link href="/the-hub/facilities">
                                        <a className={style.link}>
                                            facilities
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={`${style.link} ${style.drop}`}>
                            Sports
                            <div className={style.dropdown}>
                                <div className={style.dropdown_content}>

                                    <Link href="/the-hub/about">
                                        <a className={style.link}>
                                            Football
                                        </a>
                                    </Link>
                                    <Link href="/the-hub/facilities">
                                        <a className={style.link}>
                                            Rugby
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className={`${style.link} ${style.drop}`}>
                            Groups
                            <div className={style.dropdown}>
                                <div className={style.dropdown_content}>

                                    <Link href="/the-hub/about">
                                        <a className={style.link}>
                                            dancing
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="/events">
                        <a className={style.link}>
                            events
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default topNav