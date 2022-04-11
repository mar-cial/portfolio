import { AppProps } from 'next/app'
import '../styles/globals.css'

export default function Portfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}