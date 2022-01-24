// Components
import Head from 'next/head'
import Link from 'next/link'

// Styling
import Layout from '../../layouts/main'
import style from '../../styles/bookings.module.scss'

const title = 'BICST - Hub Hire Booking'


export default function Bookings() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>

            <div className='flex'>
                <div>
                    <h2>Hub Booking Form</h2>
                    <p>please use the form only for booking the hub</p>
                </div>

                <div>
                    {/* <form action="" className={style.form}>
                        <label htmlFor="">full name</label>
                        <input type="text" name="fullName" id="" />

                        <label htmlFor="">email address</label>
                        <input type="email" name="email" id="" />

                        <label htmlFor="">questions / message / notes</label>
                        <textarea name="message" id="" cols="30" rows="10"></textarea>

                        <label htmlFor="">date</label>
                        <input type="date" name="date" id="" />

                        <label htmlFor="">start time</label>
                        <input type="time" name="time" id="" />

                        <label htmlFor="">finish time</label>
                        <input type="time" name="time" id="" />
                        <div className="flex">
                            <input type="submit" value="submit" className='btn' />
                            <input type="reset" value="reset form" className='btn' />
                        </div>
                    </form> */}

                    <iframe src="https://koalendar.com/e/hub-booking-form?embed=true" width="100%" height="800px" frameborder="0"></iframe>
                </div>
            </div>
        </Layout>
    )
}