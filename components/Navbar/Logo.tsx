import React from 'react';
import Image from 'next/image';

export const Logo = () => {
    return (
        <a href="#" className="flex items-center relative w-7 h-7 md:w-8 md:h-8">
            <Image src="/logo-non.png" alt="Picture of the author" fill />
        </a>
    );
};
