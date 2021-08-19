// Components
import Link from 'next/link'

import style from '../styles/footer.module.scss'

const Footer = () => {
    return (
        <div>
            <div className={style.top_footer} />
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.item}>
                        <Link href="#">
                            <a className={style.link}>home</a>
                        </Link>
                        <Link href="#">
                            <a className={style.link}>The Hub</a>
                        </Link>
                        <Link href="#">
                            <a className={style.link}>contact us</a>
                        </Link>
                        <Link href="#">
                            <a className={style.link}>facilities</a>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link href="#" className={style.link}>
                            <a className={style.link}>Football</a>
                        </Link>
                        <Link href="#">
                            <a className={style.link}>rugby</a>
                        </Link>
                        <Link href="#">
                            <a className={style.link}>bowling</a>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <h3 className={style.heading}>contact us</h3>
                        <p className={style.text}>Please feel free to contat Barrow Island Community Sports Trust with any questions you have.</p>
                        <p className={style.text}>
                            Barrow Island Community Sports Trust ltd. <br />
                            Cavendish Park, Barrow Island, Cumbria. <br />
                            Contact Number : <span className={style.span}>01229 820470</span> <br />
                            <a className={style.link_2} href="mailto:bicstrust@gmail.com">bicstrust@gmail.com</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer