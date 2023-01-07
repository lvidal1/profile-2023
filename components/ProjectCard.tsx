import classNames from 'classnames';
import React from 'react'
import styles from "../styles/components/ProjectCard.module.scss"

interface ProjectCardProp {
    title: string;
    sparkle?: boolean;
}

export const ProjectCard = ({ title, sparkle }: ProjectCardProp) => {
    return (
        <div className={styles.container}>
            <div className={classNames([styles.title, sparkle ? styles.sparkle : ""])}>{title}</div>
        </div>
    )
}
