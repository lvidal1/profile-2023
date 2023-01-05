import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classNames from 'classnames'

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
        <section className={classNames(["mx-auto max-w-screen-xl text-center", "h-screen min-h-0 md:min-h-screen", "space-y-10 flex items-center justify-center flex-col"])}>
          <span className='bg-light-green p-2 text-sm rounded text-dark-gray font-semibold'>Full Stack Developer</span>
          <h1 className="text-5xl font-bold tracking-wide">
            Talk is cheap.<br />
            Show me the code
          </h1>
          <p className='max-w-screen-sm mx-auto text-sm text-slate-200'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <a href='#' className='text-light-green font-semibold pb-1 border-b-4 border-transparent hover:border-light-green text-lg'>
            LET'S CHAT
          </a>
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
