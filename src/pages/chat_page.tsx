import Profile_card from '@/components/profile_card'
import Head from 'next/head'
import styles from '../styles/index.module.scss'

export default function chat_page() {
  return (
    <>
      <Head>
        <title>Dev Chat</title>
      </Head>
      <div className={styles.container}>
        <Profile_card/>
      </div>
    </>
  )
}
