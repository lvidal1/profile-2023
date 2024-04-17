import Head from 'next/head';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Introduction } from '../components/Introduction';
import { Tools } from '../components/Tools';
import { Projects } from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar/Navbar';

import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';

import commonEN from '../locales/en/common.json';
import commonES from '../locales/es/common.json';

export default function Home() {
    const { lang } = useTranslation();

    const title = 'Welcome to my <hood/> | Leonardo';
    return (
        <>
            <I18nProvider lang={lang} namespaces={{ commonEN, commonES }}>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content="Profile" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/favicon/site.webmanifest"></link>
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
            </I18nProvider>
        </>
    );
}
