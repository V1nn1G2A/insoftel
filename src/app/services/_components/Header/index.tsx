import cn from 'classnames/bind'
import type { FC } from 'react'

import styles from './index.module.scss'

interface IHeader {
  title: string
  text: string
  className?: string
}

const cx = cn.bind(styles)

export const Header: FC<IHeader> = ({ title, text, className }) => (
  <>
    <div className={cx('heading', className)}>
      <h2 className={cx('title')}>{title}</h2>
      <p className={cx('text')}>{text}</p>
    </div>
    <div className={cx('line')}></div>
  </>
)
