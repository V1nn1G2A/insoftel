'use client'

import cx from 'classnames'
import { FC } from 'react'

import SearcIcon from '@assets/icons/search.svg'

import styles from './index.module.scss'

interface ISearch extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: 'dark' | 'light'
}

const Search: FC<ISearch> = ({ theme, ...props }) => {
  return (
    <div className={cx(styles.searchWrapper)}>
      <div className={cx(styles.search)}>
        <input
          type="text"
          placeholder="Search"
          className={cx(styles.input, styles[`input--${theme}`])}
          {...props}
        />
        <SearcIcon />
      </div>
    </div>
  )
}

export default Search
