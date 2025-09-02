'use client'

import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useScrollLock } from '@/hooks/useScrollLock'

import LogoIcon from '@assets/icons/logo.svg'

import Menu from './_components/Menu'

import styles from './index.module.scss'

const Header = () => {
  const headerRef = useRef<HTMLElement>(null)
  const [activeSectionClass, setActiveSectionClass] = useState<string>('')

  const path = usePathname()

  const allPaths = [
    'services',
    'technologies',
    'products',
    '',
    'about',
    'careers',
    'contacts',
  ]
  const lightPaths = ['about', 'careers', 'contacts', 'products']

  const isKnownPath = allPaths.some(
    item => path === `/${item}` || (item === '' && path === '/')
  )
  const isLightPath = lightPaths.some(item => path === `/${item}`)

  const theme = isLightPath || !isKnownPath ? 'light' : 'dark'

  const [isOpen, setIsOpen] = useState(false)

  useScrollLock(isOpen)

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [path])

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const id = e.detail
      if (id && styles[`header--${id}`]) {
        setActiveSectionClass(styles[`header--${id}`])
      } else {
        setActiveSectionClass('')
      }
    }

    document.addEventListener('activeSectionChange', handler as EventListener)
    return () =>
      document.removeEventListener(
        'activeSectionChange',
        handler as EventListener
      )
  }, [])

  return (
    <header
      ref={headerRef}
      className={cx(
        styles.header,
        styles[`header--${theme}`],
        activeSectionClass,
        { [styles['header--active']]: isOpen }
      )}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link
            href="/"
            className={styles.logo}
          >
            <LogoIcon />
          </Link>
          <Menu
            theme={theme}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
