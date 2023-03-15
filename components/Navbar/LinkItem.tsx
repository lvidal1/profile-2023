import classNames from 'classnames'
import React from 'react'

interface LinkItemProp {
    text: string,
    url: string,
    active?: boolean
}

export const LinkItem = ({ text, url, active }: LinkItemProp) => {
    return (
        <a href={url} className={classNames(["block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-primary", active ? "text-primary" : ""])} aria-current="page">{text}</a>
    )
}
