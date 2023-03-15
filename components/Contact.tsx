import React from 'react'
import classNames from 'classnames'
import styles from "../styles/components/Contact.module.scss"


const Contact = () => {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={classNames([styles.column, styles.left])}>
                    <h4 className={classNames([styles.title])}>Let&apos;s make something amazing together</h4>
                    <p className={styles.title}>Start by  <a href='mailto:lvidal910@gmail.com' className={styles.ctaLink}>
                        saying hi
                    </a></p>
                </div>
                <div className={classNames([styles.column, styles.right])}>
                    <div className={classNames([styles.label, "mb-6"])}>Information</div>
                    <a href='mailto:lvidal910@gmail.com' className={styles.title}>lvidal@gmail.com</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
