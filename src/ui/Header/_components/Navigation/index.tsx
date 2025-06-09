'use client'

import cx from 'classnames'
import { FC, useState } from 'react'

import LinkList from '../LinkList'
import Search from '../Search'
import SearchResult, { ISearchResult } from '../SearchResult'

import styles from './index.module.scss'

interface NavigationProps {
  isOpen: boolean
  theme: 'dark' | 'light'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  results?: ISearchResult[]
  query: string
}

const Navigation: FC<NavigationProps> = ({
  isOpen,
  theme,
  onChange,
  value,
  results,
  query,
}) => {
  const [hoverLink, setHoverLink] = useState('')

  return (
    <div
      className={cx(styles.wrapper, {
        [styles['wrapper--active']]: isOpen,
        [styles['wrapper--dark']]: theme === 'dark',
        [styles['wrapper--light']]: theme === 'light',
      })}
    >
      <div className={styles.mobileSearch}>
        <Search
          theme={theme}
          onChange={onChange}
          value={value}
        />
      </div>
      <SearchResult
        results={results || []}
        theme={theme}
        query={query}
        setHoverLink={setHoverLink}
      />
      <nav className={styles.navigation}>
        <LinkList
          isOpen={isOpen}
          theme={theme}
          hasQuery={!!query}
          hoverLink={hoverLink}
        />
      </nav>
    </div>
  )
}

export default Navigation
