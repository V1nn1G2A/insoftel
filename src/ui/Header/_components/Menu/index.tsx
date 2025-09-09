'use client'

import cx from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

import CrossIcon from '@assets/icons/cross.svg'

import jsonData from '../../index.json'
import Navigation from '../Navigation'
import Search from '../Search'
import { searchContent } from './searchContent'

import styles from './index.module.scss'

interface IMenu {
  theme: 'dark' | 'light' | 'grey'
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const Menu: FC<IMenu> = ({ theme, isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('')
  const ref = useRef<HTMLDivElement | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setQuery(query)
  }

  const results = query.length > 4 ? searchContent(jsonData, query) : undefined

  const handleClear = () => {
    setQuery('')
  }

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
    }
  }, [isOpen])

  return (
    <div
      className={styles.menu}
      ref={ref}
    >
      <div className={styles.desktopSearch}>
        <Search
          theme={theme !== 'grey' ? theme : 'light'}
          onChange={handleSearch}
          value={query}
          isInitFocused={isOpen}
          onFocus={() => setIsOpen(true)}
          onClear={handleClear}
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
        onClear={() => setQuery('')}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default Menu
