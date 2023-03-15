import React from 'react'
import styles from "../styles/components/Introduction.module.scss"
import { ScopeCard } from './ScopeCard'

export const Introduction = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.scope}>
                    <ScopeCard
                        title={"Front-End"}
                        brief={"Build beautiful, responsive websites that work seamlessly across all devices"} />
                    <ScopeCard
                        title={"Back-End"}
                        brief={"Develop secure and scalable back-end solutions with clean architecture"} />
                    <ScopeCard
                        title={"AI Prompting"}
                        brief={"Transform your business with GPT integration to make data-driven decisions faster than ever."} />
                </div>
                <div className={styles.speech}>
                    <div className={styles.label}>Introduction</div>
                    <h4 className={styles.title}>Hola, I&apos;m Leonardo Vidal</h4>
                    <div className={styles.quote}>"Crafting innovative web experiences to achieve your business goals."</div>
                    <p className={styles.description}>
                        This is me, a web developer with years of experience under my belt. From developing cutting-edge applications with the latest technologies to effectively leading teams through each stage of the web development cycle, I'm confident that I have what it takes to bring your web development project to life. Let's work together to create scalable and high-quality products that exceed your expectations!
                    </p>
                </div>
            </div>
        </section>
    )
}
