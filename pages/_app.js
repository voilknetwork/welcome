import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script strategy="afterInteractive" src="/assets/js/script.js" />
  </>
}

export default MyApp
