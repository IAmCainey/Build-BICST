// Components
import Link from 'next/link'

// Styling
import style from '../styles/topnav.module.scss'


const topNav = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <div>
                    <Link href="/">
                        <a className={style.titleLink}>
                            <h4 className={style.h4}>BICST</h4>
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

                                    <Link href="/the-hub/about">
                                        <a className={style.link}>
                                            About us
                                        </a>
                                    </Link>
                                    <Link href="/galleries">
                                        <a className={style.link}>
                                            Gallories
                                        </a>
                                    </Link>
                                    <Link href="/the-hub/hire">
                                        <a className={style.link}>
                                            hall hire
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link href="/post">
                        <a className={style.link}>
                            Articles
                        </a>
                    </Link>
                    <Link href="/the-hub/hire">
                        <a className='btn-reverse lm-md'>Hall Hire</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default topNav