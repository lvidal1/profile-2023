import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classNames from 'classnames'
import Hero from '../components/Hero'
import { SocialIcon } from 'react-social-icons'

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
      <footer className={classNames(["text-white", "bg-black"])}>
        <div className='mx-auto max-w-screen-md xl:max-w-screen-xl text-center flex flex-col sm:flex-row p-8 md:px-0 items-center space-y-10 sm:space-y-0'>
          <div className='w-3/5 flex flex-col sm:flex-row sm:space-x-10 space-y-2 sm:space-y-0 items-center'>
            <p className='text-xl'><span className='font-bold'>Leonardo</span> Vidal</p>
            <span className='text-xs text-slate-300'>{new Date().getFullYear()} | All Rights Reserved</span>
          </div>
          <div className='w-2/5 flex sm:justify-end'>
            <SocialIcon url="#" bgColor='transparent' fgColor="white" network='twitter' />
            <SocialIcon url="#" bgColor='transparent' fgColor="white" network='instagram' />
            <SocialIcon url="#" bgColor='transparent' fgColor="white" network='github' />
          </div>
        </div>
      </footer>
    </>
  )
}
