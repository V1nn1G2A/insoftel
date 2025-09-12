'use client'

import cx from 'classnames'
import { FC, useState } from 'react'

import LogoDark from '@/assets/icons/imageDark.svg'
import LogoLight from '@/assets/icons/logo_header.svg'

import LinkList from '../LinkList'
import Search from '../Search'
import SearchResult, { ISearchResult } from '../SearchResult'

import styles from './index.module.scss'

interface NavigationProps {
  isOpen: boolean
  theme: 'dark' | 'light' | 'grey'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  results?: ISearchResult[]
  query: string
  onClear: () => void
  onClose: () => void
}

const Navigation: FC<NavigationProps> = ({
  isOpen,
  theme,
  onChange,
  value,
  results = [],
  query,
  onClear,
  onClose,
}) => {
  const [hoverLink, setHoverLink] = useState('')
  const isQueryValid = results?.length > 0

  return (
    <div
      className={cx(styles.wrapper, {
        [styles['wrapper--active']]: isOpen,
        [styles['wrapper--dark']]: theme === 'dark',
        [styles['wrapper--light']]: theme === 'light',
        [styles['wrapper--grey']]: theme === 'grey',
      })}
    >
      <div className={styles.mobileSearch}>
        <Search
          theme={theme !== 'grey' ? theme : 'light'}
          onChange={onChange}
          value={value}
          onClear={onClear}
        />
      </div>
      <SearchResult
        results={results}
        theme={theme !== 'grey' ? theme : 'light'}
        query={query}
        setHoverLink={setHoverLink}
      />
      <LinkList
        isOpen={isOpen}
        theme={theme !== 'grey' ? theme : 'light'}
        hasQuery={isQueryValid}
        hoverLink={hoverLink}
        onClose={onClose}
      />
      {theme === 'dark' ? (
        <LogoLight
          id="light"
          className={cx(styles.linkLogo, {
            [styles['linkLogo--active']]: isQueryValid,
          })}
        />
      ) : (
        <LogoDark
          className={cx(styles.linkLogo, {
            [styles['linkLogo--active']]: isQueryValid,
          })}
        />
      )}
    </div>
  )
}

export default Navigation
