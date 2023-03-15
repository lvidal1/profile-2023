import React from 'react'
import styles from "../styles/components/Hero.module.scss"
import Stat from './Stat';
import { TypingText } from './TypingText';

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.pattern}></div>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.label}>Full Stack Developer</span>
                    <h1 className={styles.title}>
                        I got you!<br />
                        <TypingText />
                    </h1>
                    <p className={styles.copy}>
                        Transforming app ideas into user-friendly reality
                    </p>
                    <a href='mailto:lvidal910@gmail.com' className={styles.ctaLink}>
                        LET&apos;S CHAT
                    </a>
                </div>
                <div className={styles.stats}>
                    <Stat end={10} duration={1.5} label={'years experience'} />
                    {/* <Stat end={56} duration={2.3} label={'projects completed'} /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;
