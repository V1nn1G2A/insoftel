'use client'

import cx from 'classnames'
import { FC, useRef, useState } from 'react'

import CrossIcon from '@assets/icons/cross.svg'
import SearcIcon from '@assets/icons/search.svg'

import styles from './index.module.scss'

interface ISearch extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: 'dark' | 'light'
  onClear: () => void
}

const Search: FC<ISearch> = ({ theme, onClear, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={cx(styles.searchWrapper)}>
      <div
        className={cx(styles.search, { [styles['search--active']]: isFocused })}
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
            <CrossIcon />
          </button>
        )}
      </div>
    </div>
  )
}

export default Search
