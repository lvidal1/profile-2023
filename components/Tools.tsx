import React from 'react'
import classNames from 'classnames'
import styles from "../styles/components/Tools.module.scss"

export const Tools = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <i className={classNames([styles.icon, "devicon-react-original"])}></i>
                <i className={classNames([styles.icon, "devicon-tailwindcss-plain"])}></i>
                <i className={classNames([styles.icon, "devicon-jest-plain"])}></i>
                <i className={classNames([styles.icon, "devicon-php-plain"])}></i>
                <i className={classNames([styles.icon, "devicon-nodejs-plain"])}></i>
                <i className={classNames([styles.icon, "devicon-docker-plain"])}></i>
                <i className={classNames([styles.icon, "devicon-amazonwebservices-plain-wordmark"])}></i>
            </div>
        </section>
    )
}
