import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import styles from '../styles/Home.module.css'

const roboto = Roboto_Mono({ weight: "400" })

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        <h1 className="text-3xl font-bold tracking-wide text-center p-4">
          Talk is cheap
        </h1>
      </main>
    </>
  )
}
