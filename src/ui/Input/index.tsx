import cn from 'classnames/bind'
import type { FC } from 'react'

import styles from './index.module.scss'

interface IInput extends React.ComponentProps<'input'> {
  className?: string
}

const cx = cn.bind(styles)

const Input: FC<IInput> = ({ className, ...props }) => (
  <input
    {...props}
    className={cx('input', className)}
  />
)

export default Input
