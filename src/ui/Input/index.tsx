'use client'

import cn from 'classnames/bind'
import type { FC } from 'react'
import { useState } from 'react'

import ErrorIcon from '@/assets/icons/error.svg'

import styles from './index.module.scss'

interface IInput extends React.ComponentProps<'input'> {
  className?: string
  label: string
  isFulled?: boolean
  id: string
  error: string | undefined
}

const cx = cn.bind(styles)

const Input: FC<IInput> = ({
  className,
  label,
  isFulled,
  id,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const classNames = cx('wrapper', { 'wrapper--active': isFocused })

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!isFulled) setIsFocused(false)
  }

  return (
    <div
      className={classNames}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <label
        htmlFor={id}
        className={styles.label}
        onClick={handleFocus}
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className={cx('input', className)}
      />
      {error && (
        <div className={styles.error}>
          <ErrorIcon className={styles.errorIcon} />
          <p className={styles.errorText}>{error}</p>
        </div>
      )}
    </div>
  )
}

export default Input
