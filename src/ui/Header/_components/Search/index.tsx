'use client'

import cx from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

import SearcIcon from '@assets/icons/search.svg'

import styles from './index.module.scss'

interface ISearch extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: 'dark' | 'light'
  onClear: () => void
  isInitFocused?: boolean
}

const Search: FC<ISearch> = ({ theme, onClear, isInitFocused, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isInitFocused) {
      inputRef.current?.focus()
    }
  }, [isInitFocused])

  return (
    <div className={cx(styles.searchWrapper)}>
      <div
        className={cx(styles.search, {
          [styles['search--active']]: isFocused || isInitFocused,
        })}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className={cx(styles.input, styles[`input--${theme}`])}
          {...props}
          onFocus={e => {
            props?.onFocus?.(e)
            setIsFocused(true)
          }}
          onBlur={() => setIsFocused(false)}
        />
        <SearcIcon className={cx({ [styles.iconActive]: props.value })} />
        {props.value && (
          <button
            className={cx(
              styles.clear,
              { [styles.clearActive]: props.value },
              styles[`clear--${theme}`]
            )}
            onClick={onClear}
          >
            Erase
          </button>
        )}
      </div>
    </div>
  )
}

export default Search
