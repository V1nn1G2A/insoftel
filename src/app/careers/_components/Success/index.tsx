import cn from 'classnames/bind'
import type { FC } from 'react'

import styles from './index.module.scss'

interface ISuccess {
  className?: string
}

const cx = cn.bind(styles)

const Success: FC<ISuccess> = ({ className }) => (
  <div className={cx('success', className)}>
    <p className={cx('title')}>Thank you for applying</p>
    <p className={cx('message')}>Your application has been submitted</p>
  </div>
)

export default Success
