import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

const websiteTitle = 'JSt - video sharing player'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/jst-black.svg"/>
        <title>{websiteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://www.googleoptimize.com/optimize.js?id=OPT-NMTLJNN"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-17KH9B32S4"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-17KH9B32S4');
        `}
      </Script>
    </>
  )
}

export default MyApp
