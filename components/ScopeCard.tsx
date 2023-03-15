import React from 'react'
import styles from "../styles/components/ScopeCard.module.scss"

interface ScopeCardProp {
    title: string,
    brief: string
}

export const ScopeCard = ({ title, brief }: ScopeCardProp) => {
    return (
        <article className={styles.container}>
            <div className={styles.icon}></div>
            <header className={styles.title}>{title}</header>
            <p className={styles.brief}>{brief}</p>
        </article>
    )
}
