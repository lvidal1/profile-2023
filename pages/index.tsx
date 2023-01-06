import Head from 'next/head'
import classNames from 'classnames'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames(["text-white", "bg-dark-gray"])}>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
