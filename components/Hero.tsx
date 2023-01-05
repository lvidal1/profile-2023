import React from 'react'
import styles from "../styles/components/Hero.module.scss"
import Stat from './Stat';

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heroInformation}>
                <span className={styles.label}>Full Stack Developer</span>
                <h1 className={styles.title}>
                    Talk is cheap.<br />
                    Show me the code
                </h1>
                <p className={styles.copy}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <a href='#' className={styles.ctaLink}>
                    LET&apos;S CHAT
                </a>
            </div>
            <div className={styles.statInformation}>
                <Stat number={10} label={'years experience'} />
                <Stat number={56} label={'projects completed'} />
            </div>
        </section>
    )
}

export default Hero;
