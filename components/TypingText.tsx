import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import useTranslation from 'next-translate/useTranslation';

export const TypingText = () => {
    const { t, lang } = useTranslation();

    const sequenceEN = [
        t('common:hero.typing.showCode'),
        1000,
        t('common:hero.typing.showDesign'),
        1000,
        t('common:hero.typing.showWeb'),
        1000,
        t('common:hero.typing.showAPI'),
        1000,
        t('common:hero.typing.showDB'),
        1000,
    ];

    const sequenceES = [
        t('commonES:hero.typing.showCode'),
        1000,
        t('commonES:hero.typing.showDesign'),
        1000,
        t('commonES:hero.typing.showWeb'),
        1000,
        t('commonES:hero.typing.showAPI'),
        1000,
        t('commonES:hero.typing.showDB'),
        1000,
    ]

    return (
        <>
            {lang === "en" &&
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={sequenceEN}
                    speed={45} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                    cursor={true}
                />}
            {lang === "es" &&
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={sequenceES}
                    speed={45} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                    cursor={true}
                />}
        </>
    )
}
