// Components
import Link from 'next/link'
import Image from 'next/image'

import sponsorLotto from '../public/images/sponsors/lotto.png'

// Styling
import style from '../styles/footer.module.scss'


// Icons
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <div className={style.top_footer} />
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.item}>
                        <Link href="/">
                            <a className={style.link}>home</a>
                        </Link>
                        <Link href="/bookings">
                            <a className={style.link}>Bookings</a>
                        </Link>
                        <Link href="/galleries">
                            <a className={style.link}>Gallery</a>
                        </Link>
                        <Link href="/contact">
                            <a className={style.link}>Contact Us</a>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link href="/terms" className={style.link}>
                            <a className={style.link}>terms</a>
                        </Link>
                        <Link href="/privacy">
                            <a className={style.link}>privacy</a>
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
                        <Image
                            className={style.lotto}
                            src={sponsorLotto}
                            alt="the big lottery found"
                            placeholder="blur"
                        />

                        <div className='social'>
                            <Link href="https://www.facebook.com/bicstrust">
                                <a target='blank'>
                                    <AiOutlineFacebook className='icon-social' />
                                </a>
                            </Link>
                            <Link href='https://twitter.com/bicstrust'>
                                <a target='blank'>
                                    <AiOutlineTwitter className='icon-social' />
                                </a>
                            </Link>
                            <Link href='mailto:bicstrust@gmail.com'>
                                <a>
                                    <AiOutlineMail className='icon-social' />
                                </a>
                            </Link>
                            <Link href='tel:01229 820470'>
                                <a>
                                    <AiOutlinePhone className='icon-social' />
                                </a>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={style.footer_note}>
                    <p className={style.text}>developed by // <a className={style.link_2} href="https://paulcaine.co.uk" target="blank">Paul Caine</a>
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer