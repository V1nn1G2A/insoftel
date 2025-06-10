'use client'

import cn from 'classnames/bind'
import type { FC } from 'react'
import { useState } from 'react'

import styles from './index.module.scss'

interface IInput extends React.ComponentProps<'input'> {
  className?: string
  label: string
}

const cx = cn.bind(styles)

const Input: FC<IInput> = ({ className, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  const classNames = cx('wrapper', { 'wrapper--active': isFocused })

  return (
    <div
      className={classNames}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <label
        htmlFor={label}
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={label}
        {...props}
        className={cx('input', className)}
      />
    </div>
  )
}

export default Input
