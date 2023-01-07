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
                        brief={"Model & optimize UI to creates value on projects"} />
                    <ScopeCard
                        title={"Back-End"}
                        brief={"Model clean & robust architecture for modern apps"} />
                    <ScopeCard
                        title={"Analytics"}
                        brief={"Get insights from your site, e-commerce and more"} />
                </div>
                <div className={styles.speech}>
                    <div className={styles.label}>Introduce</div>
                    <h4 className={styles.title}>Hello, I&apos;m Leonardo Vidal</h4>
                    <div className={styles.quote}>Great power comes with great responsability</div>
                    <p className={styles.description}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                </div>
            </div>
        </section>
    )
}
