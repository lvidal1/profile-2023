import React from 'react'
import styles from "../styles/components/ScopeCard.module.scss"

interface ScopeCardProp {
    title: string,
    brief: string
}

export const ScopeCard = ({ title, brief }: ScopeCardProp) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}></div>
            <div className={styles.title}>{title}</div>
            <div className={styles.brief}>{brief}</div>
        </div>
    )
}
