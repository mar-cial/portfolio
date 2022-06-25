import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>César Marcial - Personal Portfolio</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
