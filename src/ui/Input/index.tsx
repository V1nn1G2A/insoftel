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
  const initialHeight = useRef<number>(0)
  const keyboardTimeout = useRef<NodeJS.Timeout>(null)

  const classNames = cx('wrapper', { 'wrapper--active': isFocused || isFulled })

  const handleFocus = () => {
    setIsFocused(true)
    // Store initial height when focus starts
    initialHeight.current = window.innerHeight
  }

  const handleBlur = () => {
    setIsFocused(false)

    // Clear any existing timeout
    if (keyboardTimeout.current) {
      clearTimeout(keyboardTimeout.current)
    }

    // Restore header position after a short delay to ensure keyboard is hidden
    keyboardTimeout.current = setTimeout(() => {
      const header = document.getElementById('header')
      if (header) {
        header.style.top = '0px'
      }
    }, 300)
  }

  useEffect(() => {
    const header = document.getElementById('header')

    const handleResize = () => {
      if (!header || initialHeight.current === 0) return

      const currentHeight = window.innerHeight
      const heightDifference = initialHeight.current - currentHeight

      // If keyboard is likely open (significant height reduction)
      if (heightDifference > 150 && isFocused) {
        // Hide header to give more space for the form
        header.style.top = `-${header.offsetHeight}px`
        header.style.transition = 'top 0.3s ease'
      }
      // If height is restored (keyboard closed)
      else if (heightDifference < 50) {
        header.style.top = '0px'
        header.style.transition = 'top 0.3s ease'
      }
    }

    // Only add resize listener if we're focused
    if (isFocused) {
      window.addEventListener('resize', handleResize)
    }

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      if (keyboardTimeout.current) {
        clearTimeout(keyboardTimeout.current)
      }

      // Always restore header position on component unmount or focus change
      if (header && !isFocused) {
        header.style.top = '0px'
      }
    }
  }, [isFocused])

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      const header = document.getElementById('header')
      if (header) {
        header.style.top = '0px'
        header.style.transition = ''
      }
    }
  }, [])

  return (
    <div className={classNames}>
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
        onFocus={handleFocus}
        onBlur={handleBlur}
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
