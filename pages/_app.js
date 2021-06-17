import '../styles/globals.css';
import { thecut, vulture } from '../networks';
import { DuetThemeProvider } from '../system/provider';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  let theme = {};
  if (/thecut/i.test(pathname)) {
    theme = thecut.theme;
  }
  if (/vulture/i.test(pathname)) {
    theme = vulture.theme;
  }

  return (
    <DuetThemeProvider theme={ theme }>
      <Head>
        <link rel="preload" href="fonts/Canela/Canela-Light.woff2" as="font" type="font/woff2"></link>
      </Head>
      <Component {...pageProps} />
    </DuetThemeProvider>
  )
}

export default MyApp
