// Styling
import sponsorsStyle from '../styles/sponsors.module.scss'

// Components
import Link from 'next/link'
import Image from 'next/image'

// Sponsors
import sponsorsCoop from '../public/images/sponsors/coop.jpg'
import sponsorsJohnfisher from '../public/images/sponsors/johnfisher.jpg'
import sponsorsLocaltrust from '../public/images/sponsors/localtrust.jpg'
import sponsorsLotto from '../public/images/sponsors/lotto.png'
import sponsorsWren from '../public/images/sponsors/wren.png'


export default function NameHere() {
    return (
        <section className={sponsorsStyle.sponsors}>
            <Link href='https://www.coop.co.uk/store-finder/LA14-2SD/island-road'>
                <a target='blank'>
                    <div className={sponsorsStyle.img}>
                        <Image
                            src={sponsorsCoop}
                            alt="The COOP Barrow Island"
                            className={sponsorsStyle.img}
                            placeholder="blur"
                            title='The COOP Barrow Island'
                        />
                    </div>
                </a>
            </Link>
            <Link href='https://sirjohnfisherfoundation.org.uk/'>
                <a target='blank'>
                    <div className={sponsorsStyle.img}>
                        <Image
                            src={sponsorsJohnfisher}
                            alt="John Fisher Foundation"
                            className={sponsorsStyle.img}
                            placeholder="blur"
                            title='John Fisher Foundation'
                        />
                    </div>
                </a>
            </Link>
            <Link href='https://localtrust.org.uk/big-local/'>
                <a target='blank'>
                    <div className={sponsorsStyle.img}>
                        <Image
                            src={sponsorsLocaltrust}
                            alt="Local Trush | Big Local"
                            className={sponsorsStyle.img}
                            placeholder="blur"
                            title='Local Trush | Big Local'
                        />
                    </div>
                </a>
            </Link>
            <Link href='https://www.tnlcommunityfund.org.uk/'>
                <a target='blank'>
                    <div className={sponsorsStyle.img}>
                        <Image
                            src={sponsorsLotto}
                            alt="Big Lottery Fund"
                            className={sponsorsStyle.img}
                            placeholder="blur"
                            title='Big Lottery Fund'
                        />
                    </div>
                </a>
            </Link>
            <Link href='#'>
                <a target='blank'>
                    <div className={sponsorsStyle.img}>
                        <Image
                            src={sponsorsWren}
                            alt="Wren, Resoucing YourProjects"
                            className={sponsorsStyle.img}
                            placeholder="blur"
                            title='Wren, Resoucing YourProjects'
                        />
                    </div>
                </a>
            </Link>
        </section>
    )
}