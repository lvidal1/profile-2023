import React from 'react'
import classNames from 'classnames'
import useTranslation from 'next-translate/useTranslation';
import styles from "../styles/components/Contact.module.scss"


const Contact = () => {
    const { t } = useTranslation('common');

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={classNames([styles.column, styles.left])}>
                    <h4 className={classNames([styles.title])}>{t('contact.greeting')}</h4>
                    <p className={styles.title}>{t('contact.start')}  <a href='mailto:lvidal910@gmail.com' className={styles.ctaLink}>
                        {t('contact.sayHi')}
                    </a></p>
                </div>
                <div className={classNames([styles.column, styles.right])}>
                    <div className={classNames([styles.label, "mb-6"])}>{t('contact.section')}</div>
                    <a href='mailto:lvidal910@gmail.com' className={styles.title}>lvidal@gmail.com</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
