// Components
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


// Styling
import Layout from '../layouts/main'
import style from '../styles/facilities.module.scss'

// Images
import One from '../public/images/facilities/IMG_0830.JPG'
import Two from '../public/images/facilities/IMG_0835.JPG'
import Three from '../public/images/facilities/IMG_0839.JPG'
import Four from '../public/images/facilities/IMG_0844.JPG'
import Five from '../public/images/facilities/IMG_0847.JPG'
import Six from '../public/images/facilities/IMG_0850.JPG'
import Seven from '../public/images/facilities/IMG_0856.JPG'

const pageTitle = `The Hubs Facilities`

const Galleries = () => {
    return (
        <Layout>
            <Head>
                <title>The Facilities @ The Community Hub</title>
            </Head>
            <section id="about">
                <h1>The Hub</h1>
            </section>

            <section className={style.gallery}>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={One}
                        alt='this is an alt tag'
                    />
                </div>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={Two}
                        alt='this is an alt tag'
                    />
                </div>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={Three}
                        alt='this is an alt tag'
                    />
                </div>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={Four}
                        alt='this is an alt tag'
                    />
                </div>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={Five}
                        alt='this is an alt tag'
                    />
                </div>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={Six}
                        alt='this is an alt tag'
                    />
                </div>
                <div className={style.galleryItem}>
                    <Image
                        className={style.galleryImg}
                        src={Seven}
                        alt='this is an alt tag'
                    />
                </div>
            </section>

            <section className='my-md'>
                <h1>the pitches</h1>

            </section>
        </Layout>
    )
}

export default Galleries