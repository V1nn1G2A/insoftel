import classNames from 'classnames/bind'
import type { FC } from 'react'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IContainer {
  children: React.ReactNode
  className?: string
  style?: Record<string, string>
}

const Container: FC<IContainer> = ({ children, className, style }) => (
  <div
    className={cx('container', className)}
    style={style}
  >
    {children}
  </div>
)

export default Container
