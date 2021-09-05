// Components
import Head from 'next/head'

// Styling
import Layout from '../../layouts/main'

const aboutTheHub = () => {
    return (
        <Layout>
            <Head>
                <title>Barrow Island Community Sports Trust</title>
            </Head>
            <section id="about">
                <h2>About barrow island community sports trust</h2>

                <p>
                    All about <b>Barrow Island Community Sports Trust,</b> from Community to a sporting centre, we cover it all..
                </p>
                <p>
                    Established in 2015 this Sports Trust was founded by Rob McAloone to ensure future generations on <b>Barrow Island</b> have a venue in which they are able to participate in a variety of sports as well as the use of a safe, warm Community Centre which may provide new skills as well as a venue for activities.
                </p>

                <div className="flex">
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
        </Layout >
    )
}

export default aboutTheHub