import React from 'react'
import styles from "../styles/components/Hero.module.scss"

const Hero = () => {
    return (
        <section className={styles.section}>
            <span className={styles.label}>Full Stack Developer</span>
            <h1 className={styles.title}>
                Talk is cheap.<br />
                Show me the code
            </h1>
            <p className={styles.copy}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <a href='#' className={styles.ctaLink}>
                LET'S CHAT
            </a>
        </section>
    )
}

export default Hero;
