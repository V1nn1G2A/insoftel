import cx from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import LogoDark from '@/assets/icons/imageDark.svg'
import LogoLight from '@/assets/icons/imageLight.svg'

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
              [styles['link--active']]: hoverLink.includes(path),
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
    {theme === 'dark' ? (
      <LogoLight
        className={cx(styles.linkLogo, {
          [styles['linkLogo--active']]: hasQuery,
        })}
      />
    ) : (
      <LogoDark
        className={cx(styles.linkLogo, {
          [styles['linkLogo--active']]: hasQuery,
        })}
      />
    )}
  </>
)

export default LinkList
