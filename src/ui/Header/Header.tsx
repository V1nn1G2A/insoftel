import cn from 'classnames'
import type { FC } from 'react'

import styles from './Header.module.scss'

interface IHeader {
  className?: string
  children: string
  index: string
  appereance?: 'light' | 'dark'
}

const cx = cn.bind(styles)

const Header: FC<IHeader> = ({
  className,
  children,
  index,
  appereance = 'light',
}) => {
  const classNames = cx(
    styles.header,
    styles[`header--${appereance}`],
    className
  )

  return (
    <div className={classNames}>
      <sup className={styles.index}>[ {index} ]</sup>
      <h2 className={styles.text}>{children}</h2>
    </div>
  )
}

export default Header
