import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import classNames from 'classnames';

export const Translate = () => {
    const { lang } = useTranslation('ns1');
    return (
        <div className="mx-4 text-white md:text-sm md:font-medium">
            <Link href="/" locale="en">
                <span className={classNames(['hover:text-primary', lang === 'en' ? 'text-primary' : null])}>En</span>
            </Link>
            <span className="mx-1">/</span>
            <Link href="/" locale="es">
                <span className={classNames(['hover:text-primary', lang === 'es' ? 'text-primary' : null])}>Es</span>
            </Link>
        </div>
    );
};
