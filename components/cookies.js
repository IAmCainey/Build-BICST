// Imports
import CookieConsent, { Cookies } from 'react-cookie-consent'

export default function NameHere() {
    return (
        <CookieConsent
            location='bottom'
            buttonText='Yes I Agree'
            style={{ padding: '20px 10px' }}
            expires={150}
        >
            Barrow Island Community Sports Trust website uses cookies to enhance the user experience.
        </CookieConsent>
    )
}