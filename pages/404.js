// Components
import Link from 'next/link'
import Head from 'next/head'

// Styling
import style from '../styles/error.module.scss'


export default function Custom404() {
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.title}><span className={style.span}>error</span> | 404</h1>
                <h4>This page your looking for, can not be found</h4>
                <p>Go back, do not pass go</p>


                <Link href='/'>
                    <a className={style.btn}>
                        Back I Tell You
                    </a>
                </Link>
            </div>
        </div>
    )
}