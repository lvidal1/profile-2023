import React, { useCallback } from 'react'
import { TypeAnimation } from 'react-type-animation'
import useTranslation from 'next-translate/useTranslation';
import { locales, LOCALES_NAMESPACE } from '../utils/locale';

export const TypingText = () => {
    const { t, lang } = useTranslation();

    const getSequence = useCallback((lang: string) => {
        const locale = LOCALES_NAMESPACE[lang]
        return [
            t(`${locale}:hero.typing.showCode`),
            1000,
            t(`${locale}:hero.typing.showDesign`),
            1000,
            t(`${locale}:hero.typing.showWeb`),
            1000,
            t(`${locale}:hero.typing.showAPI`),
            1000,
            t(`${locale}:hero.typing.showDB`),
            1000,
        ]
    }, [lang])

    return <>
        {locales.map((l) => {
            return <React.Fragment key={l}>
                {lang === l &&
                    <TypeAnimation
                        sequence={getSequence(l)}
                        speed={45}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={true}
                    />}
            </React.Fragment>
        })}
    </>
}
