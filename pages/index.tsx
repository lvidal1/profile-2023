import Head from 'next/head'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Introduction } from '../components/Introduction'
import { Tools } from '../components/Tools'
import { Projects } from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar/Navbar'

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
        <Navbar />
        <Hero />
        <Introduction />
        <Tools />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
