import Head from 'next/head'
import FormLogin from '../components/FormLogin'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Chat</title>
      </Head>
      <main id={styles.main}>
        <FormLogin />
      </main>
    </>
  )
}
