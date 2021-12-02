// Styling
import Layout from '../layouts/landingpage'
import style from '../styles/landingpage.module.scss'
import cardStyle from '../styles/cards.module.scss'

// Components


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
                src="https://res.cloudinary.com/dw76zgmsl/image/upload/c_thumb,w_200,g_face/v1598037564/BICST/Site/People/rob-mcaloone_glxwaw.jpg"
                width="200"
                height="200"
                alt="rob mcaloone"
              />
              <h4>rob mcaloone</h4>
              <span>Director</span>
            </div>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src="https://res.cloudinary.com/dw76zgmsl/image/upload/ar_1:1,b_rgb:262c35,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_1000/v1598037564/BICST/Site/People/IMG_0841-768x576_uspkgk.jpg"
                width="200"
                height="200"
                alt="Jimmy Tongue"
              />
              <h4>Jimmy Tongue</h4>
              <span>Director & Chairman</span>
            </div>

            <div className={cardStyle.card}>
              <Image
                className={cardStyle.img}
                src="https://res.cloudinary.com/dw76zgmsl/image/upload/c_thumb,w_200,g_face/v1598037564/BICST/Site/People/laura_t16pdv.jpg"
                width="200"
                height="200"
                alt="rLaura Brookshaw"
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