import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { links } from './CONST'

import styles from './index.module.scss'

interface LinkListProps {
  isOpen: boolean
  theme: 'dark' | 'light'
  hasQuery: boolean
  hoverLink: string
}

const LinkList: FC<LinkListProps> = ({
  isOpen,
  theme,
  hasQuery,
  hoverLink,
}) => (
  <>
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
              [styles['link--active']]: hoverLink === path,
            })}
          >
            <h2 className={styles.link__title}>
              <sup className={styles.link__titleIndex}>[ {titleIndex} ]</sup>{' '}
              {title}
            </h2>
          </Link>
        </li>
      ))}
    </ul>
    <Image
      src={'./assets/linkLogo.svg'}
      width={312}
      height={312}
      alt="linkLogo"
      className={cx(styles.linkLogo, {
        [styles['linkLogo--active']]: hasQuery,
      })}
    />
  </>
)

export default LinkList
