// styling
import style from '../styles/mobilemenu.module.scss'

// Imports

import { GiHamburgerMenu } from 'react-icons/gi'

export default function MobileMenu() {
    return (
        <div className={style.container}>
            <div>
                <h3 className={style.title}>BICST</h3>
            </div>
            <div>
                <GiHamburgerMenu className={style.burger} />
            </div>
        </div>
    )
}