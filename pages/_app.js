import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preload" href="fonts/Canela/Canela-Light.woff2" as="font" type="font/woff2"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp