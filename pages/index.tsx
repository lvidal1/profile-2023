import Head from 'next/head'
import classNames from 'classnames'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Introduction } from '../components/Introduction'
import { Tools } from '../components/Tools'
import { Projects } from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Introduction />
        <Tools />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
