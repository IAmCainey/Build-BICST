// Styling
import Layout from '../layouts/landingpage'
import style from '../styles/landingpage.module.scss'
import cardStyle from '../styles/cards.module.scss'

// Components
import Sponsors from '../components/sponsors'
import { GiBullseye, GiSunglasses } from 'react-icons/gi'


// Profile Images
import profileRob from '../public/images/profiles/rob.jpg'
import profileDebbie from '../public/images/profiles/debbie.jpeg'
import profileLaura from '../public/images/profiles/laura.webp'


// Next Imports
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function scroll() {
  document.getElementById('sports').scrollInToView()
}

export default function HomePage() {

  const pageTitle = 'BICST - Parties, Events and more'
  const description = 'Barrow Island Community Sports Trust is a place for the community to come together and have fun.'
  const twitterHandle = '@bicstrust'

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <meta name="description" content={description} />
        <title>{pageTitle}</title>
      </Head>

      <section className={style.hero}>
        <div className={style.overlay}>
          <div className={style.container}>
            <div className='flex'>
              <div>
                <h1 className={style.title}>Barrow Island <br /><span className={style.span}>Community Sports Trust</span></h1>
                <span>
                  A great community, supporting and helping kids to build relationships and enjoy sports.
                </span>
              </div>
              <div className='centered'>
                <div>

                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <h2>Who are we?</h2>
        <p>
          All about <b>Barrow Island Community Sports Trust,</b> from Community to a sporting centre, we cover it all..
        </p>
        <p>
          Established in 2015 this Sports Trust was founded by Rob McAloone to ensure future generations on <b>Barrow Island</b> have a venue in which they are able to participate in a variety of sports as well as the use of a safe, warm Community Centre which may provide new skills as well as a venue for activities.
        </p>

        <div className="flex tm-lg">
          <div>
            <h2>meetings</h2>
            <p>
              BICST have their own committee which meet 4 weekly to discuss the progress of various projects and correspondance with companies who offer funding. We put forward business plans which have been carefully created to ensure we can raise the required funds to give our Local Community a much needed ‘Base’.
            </p>
          </div>
          <div>
            <h2>events & support</h2>
            <p>We support the Sports Teams which are based on Barrow Island by providing pitches at Cavendish Park. We also liase with them to find out what they would like to be included within the design for the Sports Centre. We also hold annual Sports Galas to promote Local Sports Clubs, support Local Businesses and to let not only the locals for the wider community know that we are here and this is what we can offer. </p>
          </div>
        </div>
      </section>

      <section id="mission" className={style.mission}>
        <div className={style.container_2}>

          <div>
            <h3>Our Vision <GiSunglasses className='icon-light' /></h3>
            <p>Our vision is to provide a home for Barrow Island Sports Teams with high standard pitches and a warm, safe and dry building that can also be used for other Community activities. </p>
          </div>

          <div>
            <h3>our mission <GiBullseye className='icon-light' /></h3>
            <p>The mission of BICST is to offer all residents of Barrow Island a safe, warm and dry place to congregate for Sports and Community activities at reasonable prices. The Community Centre will be run in such a safe way that it will become sustainable for the Community to cover the running costs and maintenance. The promotion of Community participation in healthy recreation for the benefit of the inhabitants of Barrow Island, by the provision of facilities for the playing of sports and other Leisure activities. </p>
          </div>

        </div>

      </section>

      <section id="theteam" className={style.theTeam}>
        <div className={style.container}>
          <div className={cardStyle.cards}>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src={profileRob}
                alt="rob mcaloone"
                width="250"
                height="250"
                placeholder="blur"
              />
              <h4 className='my-md'>rob mcaloone</h4>
              <span>Director</span>
            </div>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src={profileDebbie}
                width="250"
                height="250"
                alt="Debbie Morgan"
                placeholder="blur"
              />
              <h4 className='my-md'>Debbie morgan</h4>
              <span>Director & Chairman</span>
            </div>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src={profileLaura}
                alt="Laura Morgan"
                width="250"
                height="250"
                placeholder="blur"
              />
              <h4 className='my-md'>Laura morgan</h4>
              <span>Director Of Finance</span>
            </div>

          </div>
        </div>
      </section>

      <Sponsors />

    </Layout>
  )
}