// Styling
import Layout from '../layouts/landingpage'
import style from '../styles/landingpage.module.scss'
import cardStyle from '../styles/cards.module.scss'

// Components


// Profile Images
import profileRob from '../public/images/profiles/rob.webp'
import profileJimmy from '../public/images/profiles/jimmy.webp'
import profileLaura from '../public/images/profiles/laura.webp'


// Next Imports
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function scroll() {
  document.getElementById('sports').scrollInToView()
}

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>Barrow Community Sports Trust</title>
      </Head>

      {/* <Nav /> */}

      <section className={style.hero}>
        <div className={style.container}>
          <div>
            <h1 className={style.title}>Barrow Island <br /><span className={style.span}>Community Sports Trust</span></h1>
            <p>
              A great community, supporting and helping kids to build relationships and enjoy sports.
            </p>
          </div>
          <div>
          </div>
        </div>



        <Link href="#sports">
          <a>
            <div className={style.scroll} />
          </a>
        </Link>
      </section>

      <section id="sports" className={style.sports}>
        <div className={style.sports_container}>
          <div className={style.item}>
            <h2>Marsh Hornets Rugby</h2>
            <p>Rugby from the age of 5 years old and our newly turfed pitch.</p>
          </div>
          <div className={style.item}>
            <h2>Barrow Island jnr FC</h2>
            <p>A good kick around for all ages.</p>
          </div>
          <div className={style.item}>
            <h2>Barrow Island Bowling</h2>
            <p>Young and old, fancy joining a bowling club?</p>
          </div>
        </div>
      </section>

      <section id="mission" className={style.mission}>
        <div className={style.container_2}>

          <div>
            <h3>Our Vision</h3>
            <p>Our vision is to provide a home for Barrow Island Sports Teams with high standard pitches and a warm, safe and dry building that can also be used for other Community activities. </p>
          </div>

          <div>
            <h3>our mission</h3>
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
                placeholder="blur"
              />
              <h4>rob mcaloone</h4>
              <span>Director</span>
            </div>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src={profileJimmy}
                width="200"
                height="200"
                alt="Jimmy Tongue"
                placeholder="blur"
              />
              <h4>Jimmy Tongue</h4>
              <span>Director & Chairman</span>
            </div>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src={profileLaura}
                alt="rLaura Brookshaw"
                placeholder="blur"
              />
              <h4>Laura Brookshaw</h4>
              <span>Director Of Finance</span>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LandingPage