'use client'

import CrossIcon from '@assets/icons/cross.svg'
import { useState } from 'react'

import Search from '../Search'

import styles from './index.module.scss'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.menu}>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
      >
        {isOpen ? <CrossIcon /> : 'Menu'}
      </button>
      <div className={styles.wrapper}></div>
    </div>
  )
}

export default Menu
