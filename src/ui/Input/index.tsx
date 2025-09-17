'use client'

import cn from 'classnames/bind'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

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

  const initialHeight = useRef(window.innerHeight)
  useEffect(() => {
    const header = document.getElementById('header')

    const handleResize = () => {
      const currentHeight = window.innerHeight
      // если высота вернулась почти к изначальной — клавиатура скрыта
      if (currentHeight >= initialHeight.current - 20 && header) {
        header.style.top = '0'
      }
    }

    window.addEventListener('resize', handleResize)

    // фокус снят — тоже вернуть
    if (!isFocused && header) {
      header.style.top = '0'
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isFocused])

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
          <p className={styles.errorText}>{error}</p>
        </div>
      )}
    </div>
  )
}

export default Input
