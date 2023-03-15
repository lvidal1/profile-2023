import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
    return <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className='bg-black w-full h-full absolute top-0 left-0 z-[-1]'></div>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LV</span>
            </a>
            <div className="flex md:order-2">
                <SocialIcon rel="noreferrer" target="_blank" url="https://github.com/lvidal1/" bgColor='transparent' fgColor="white" network='github' />
                {/* <button type="button" className="text-black bg-primary hover:bg-primary rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button> */}
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-primary md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-primary md:p-0">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-primary md:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}


export default Navbar