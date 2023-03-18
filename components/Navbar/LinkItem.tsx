import React from 'react'
import classNames from 'classnames'
import styles from "../../styles/components/Navbar.module.scss"

interface LinkItemProp {
    text: string,
    url: string,
    active?: boolean
}

export const LinkItem = ({ text, url, active }: LinkItemProp) => {
    return (
        <a href={url} className={classNames([styles.linkItem, active ? "text-primary" : ""])} aria-current="page">{text}</a>
    )
}
