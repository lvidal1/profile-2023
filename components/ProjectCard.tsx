import React from 'react'

import classNames from 'classnames';
import Image from 'next/image';
import styles from "../styles/components/ProjectCard.module.scss"

interface ProjectCardProp {
    title: string;
    sparkle?: boolean;
    src: string;
}

export const ProjectCard = ({ title, sparkle, src }: ProjectCardProp) => {
    return (
        <div className={styles.container}>
            <div className={classNames([styles.title, sparkle ? styles.sparkle : ""])}>{title}</div>
            <Image alt="project-image" className={styles.image} src={src} fill></Image>
        </div>
    )
}
