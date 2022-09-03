import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import ThemeProvider from '../utils/theme'
import SizeObserver from '../utils/size-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clone Twitter</title>
        <meta
          name='description'
          content='a twitter clone to better explore my skills 
            and understand how a website works superficially'
        />
        <link rel='icon' href='/twitter-icon.png' />
      </Head>
      <SizeObserver>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SizeObserver>
    </>
  )
}

export default MyApp
