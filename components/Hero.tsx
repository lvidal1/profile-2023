import React from 'react'
import styles from "../styles/components/Hero.module.scss"
import Stat from './Stat';
import { TypingText } from './TypingText';
import useTranslation from 'next-translate/useTranslation'

const Hero = () => {
    const { t } = useTranslation('common');

    return (
        <section className={styles.section}>
            <div className={styles.pattern}></div>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.label}>{t('position')}</span>
                    <h1 className={styles.title}>
                        {t('hero.title')}<br />
                        <TypingText />
                    </h1>
                    <p className={styles.copy}>
                        {t('hero.subtitle')}
                    </p>
                    <a href='mailto:lvidal910@gmail.com' className={styles.ctaLink}>
                        {t('hero.link')}
                    </a>
                </div>
                <div className={styles.stats}>
                    <Stat end={10} duration={1.5} label={t('hero.experience')} />
                    {/* <Stat end={56} duration={2.3} label={'projects completed'} /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;
