import classNames from 'classnames/bind'
import type { FC } from 'react'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IContainer {
  children: React.ReactNode
  className?: string
}

const Container: FC<IContainer> = ({ children, className }) => (
  <div className={cx('container', className)}>{children}</div>
)

export default Container
