import React from 'react'
import Image from 'next/image'



export const Logo = () => {
    return (
        <a href="#" className="flex items-center relative w-7 h-7">
            <Image
                src="/logo.svg"
                alt="Picture of the author"
                fill
            />

        </a>
    )
}
