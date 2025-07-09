'use client'

import cx from 'classnames'
import { FC, useState } from 'react'

import CrossIcon from '@assets/icons/cross.svg'

import jsonData from '../../index.json'
import Navigation from '../Navigation'
import Search from '../Search'
import { searchContent } from './searchContent'

import styles from './index.module.scss'

interface IMenu {
  theme: 'dark' | 'light'
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const Menu: FC<IMenu> = ({ theme, isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setQuery(query)
  }

  const results = query ? searchContent(jsonData, query) : undefined

  return (
    <div className={styles.menu}>
      <div className={styles.desktopSearch}>
        <Search
          theme={theme}
          onChange={handleSearch}
          value={query}
          onFocus={() => setIsOpen(true)}
          onClear={() => setQuery('')}
        />
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cx(styles.button, { [styles['button--active']]: isOpen })}
      >
        {isOpen ? <CrossIcon /> : 'Menu'}
      </button>
      <Navigation
        isOpen={isOpen}
        theme={theme}
        onChange={handleSearch}
        value={query}
        results={results}
        query={query}
      />
    </div>
  )
}

export default Menu
