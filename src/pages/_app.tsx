import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Chat criado para desenvolvedores \o/" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header/>
      <Footer/>
      <Component {...pageProps} />
    </>
  )
}
