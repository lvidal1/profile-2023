import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { LinkItem } from './LinkItem'
import { Logo } from './Logo'
import { Translate } from './Translate'

const Navbar = () => {

    const { t } = useTranslation('common');

    return <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className='bg-black w-full h-full absolute top-0 left-0 z-[-1]'></div>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className='w-32'>
                <Logo />
            </div>
            <div className="flex items-center md:order-2">
                <Translate />
                <SocialIcon rel="noreferrer" target="_blank" url="https://github.com/lvidal1/" bgColor='transparent' fgColor="white" network='github' />
                {/* <button type="button" className="text-black bg-primary hover:bg-primary rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button> */}
                <button data-collapse-toggle="navbar-sticky" type="button" className="hidden items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
                    <li>
                        <LinkItem url="#" text={t('navbar.home')} />
                    </li>
                    <li>
                        <LinkItem url="#about" text={t('navbar.about')} />
                    </li>
                    <li>
                        <LinkItem url="#contact" text={t('navbar.contact')} />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}


export default Navbar