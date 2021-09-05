// Components
import Router from 'next/router'

// Styling
import '../styles/global.scss'

Router.onRouteChangeComplete = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

function MyApp({ Component, pageProps }) {
  return (

    <div>

      <Component {...pageProps} />

    </div>

  )
}
export default MyApp
