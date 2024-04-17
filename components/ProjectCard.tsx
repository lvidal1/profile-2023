import React from 'react';

import classNames from 'classnames';
import Image from 'next/image';
import styles from '../styles/components/ProjectCard.module.scss';

interface ProjectCardProp {
    title: string;
    sparkle?: boolean;
    src: string;
}

export const ProjectCard = ({ title, sparkle, src }: ProjectCardProp) => {
    return (
        <article className={styles.container}>
            <header className={classNames([styles.title, sparkle ? styles.sparkle : ''])}>{title}</header>
            <Image alt="project-image" className={styles.image} src={src} fill></Image>
        </article>
    );
};
