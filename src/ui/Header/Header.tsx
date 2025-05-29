import cn from 'classnames'
import type { FC } from 'react'

import styles from './Header.module.scss'

interface IHeader {
  className?: string
  text: string
  index: string
  theme?: 'light' | 'dark'
}

const cx = cn.bind(styles)

const Header: FC<IHeader> = ({ className, text, index, theme = 'light' }) => {
  const classNames = cx(styles.header, styles[`header--${theme}`], className)

  return (
    <div className={classNames}>
      <sup className={styles.index}>[ {index} ]</sup>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default Header
