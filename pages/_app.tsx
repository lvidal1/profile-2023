import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from '@next/font/google'

const robotoMono = Roboto_Mono({ weight: "300" })

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
    :root {
      --roboto-font: ${robotoMono.style.fontFamily};
    }
  `}</style><Component {...pageProps} />
  </>
}
