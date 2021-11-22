import Head from 'next/head'
import styles from '../styles/index.module.css'

import Login from '../components/login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Event Horizon</title>
        <meta name="description" content="Fast and anonymous communication app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <style scoped></style>
      <main className={styles.main}>
        <div className={styles.login}>
          <h1 className={styles.title}>EVENT HORIZON</h1>
        </div>
        <Login />
      </main>
    </div>
  )
}
