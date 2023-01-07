import classNames from 'classnames'
import React from 'react'
import styles from "../styles/components/Projects.module.scss"
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={classNames([styles.column, styles.left])}>
                    <div className={styles.header}>
                        <h4 className={styles.title}>Latest Projects</h4>
                        <p className={styles.label}>Passion & fun made visible</p>
                    </div>
                    <ProjectCard title={"Purple Network"} />
                </div>
                <div className={classNames([styles.column, styles.right])}>
                    <ProjectCard title={"Qatar Card"} sparkle={true} />
                    <ProjectCard title={"Sam IA"} />
                </div>
            </div>
        </section>
    )
}
