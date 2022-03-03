import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const websiteTitle = 'JSt3 - плеер для совместного просмотра видео'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/jst-black.svg"/>
        <title>{websiteTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
