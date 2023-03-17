import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import styles from "../styles/components/Introduction.module.scss"
import { ScopeCard } from './ScopeCard'

export const Introduction = () => {
    const { t } = useTranslation('common');

    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.scope}>
                    <ScopeCard
                        title={"Front-End"}
                        brief={t('intro.card.front')} />
                    <ScopeCard
                        title={"Back-End"}
                        brief={t('intro.card.back')} />
                    <ScopeCard
                        title={"AI Prompting"}
                        brief={t('intro.card.ai')} />
                </div>
                <div className={styles.speech}>
                    <div className={styles.label}>{t('intro.section')}</div>
                    <h4 className={styles.title}>Hola, I&apos;m <span className={styles.hypen}>Leonardo</span> Vidal</h4>
                    <div className={styles.quote}>{t('intro.copy')}</div>
                    <p className={styles.description}>
                        {t('intro.description')}
                    </p>
                </div>
            </div>
        </section>
    )
}
