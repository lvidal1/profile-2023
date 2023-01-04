import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import styles from '../styles/Home.module.css'
import classNames from 'classnames'

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
      <main className={classNames([roboto.className, "text-white", "bg-dark-gray"])}>
        <section className={classNames(["mx-auto max-w-screen-xl", "py-20", "h-screen"])}>

          <div className="grid grid-cols-2 gap-4 py-20">
            <div className='w-4/5 ml-auto space-y-4'>
              <p className=''>Full Stack Developer</p>
              <h1 className="text-3xl font-bold tracking-wide">
                Talk is cheap.<br />
                Show me the code
              </h1>
              <p className=''>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div>
            </div>
          </div>

        </section>
        <section className={classNames(["w-full", "py-20", "h-screen", "bg-red-500"])}>
          <div className={classNames(["mx-auto max-w-screen-xl"])}>
            Demo
          </div>
        </section>

      </main>
    </>
  )
}
