import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classNames from 'classnames'
import Hero from '../components/Hero'

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
        <section className={classNames(["w-full", "py-20", "h-screen", "bg-red-500"])}>
          <div className={classNames(["mx-auto max-w-screen-xl"])}>
            Demo
          </div>
        </section>

      </main>
    </>
  )
}
