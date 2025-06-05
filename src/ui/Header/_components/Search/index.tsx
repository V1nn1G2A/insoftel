'use client'

import cx from 'classnames'
import { FC, useState } from 'react'

import SearcIcon from '@assets/icons/search.svg'

import styles from './index.module.scss'

interface ISearch extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: 'dark' | 'light'
}

const Search: FC<ISearch> = ({ theme, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={cx(styles.searchWrapper)}>
      <div
        className={cx(styles.search, { [styles['search--active']]: isFocused })}
      >
        <input
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
        <SearcIcon />
      </div>
    </div>
  )
}

export default Search
