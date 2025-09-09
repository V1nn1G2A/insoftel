'use client'

import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { links } from './CONST'

import styles from './index.module.scss'

interface LinkListProps {
  isOpen: boolean
  theme: 'dark' | 'light'
  hasQuery: boolean
  hoverLink: string
  onClose: () => void
}

const LinkList: FC<LinkListProps> = ({
  isOpen,
  theme,
  hasQuery,
  hoverLink,
  onClose,
}) => {
  const pathname = usePathname()

  return (
    <nav className={cx(styles.nav, { [styles['nav--active']]: hasQuery })}>
      <ul
        className={cx(styles.list, {
          [styles['list--active']]: isOpen,
          [styles['list--withQuery']]: hasQuery,
        })}
      >
        {links.map(({ title, path, titleIndex }) => (
          <li key={titleIndex}>
            <Link
              href={path}
              className={cx(styles.link, [styles[`link--${theme}`]], {
                [styles['link--active']]: hoverLink.includes(path),
              })}
              onClick={() => pathname === path && onClose()}
            >
              <h2 className={styles.link__title}>
                <sup className={styles.link__titleIndex}>[ {titleIndex} ]</sup>{' '}
                {title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LinkList
