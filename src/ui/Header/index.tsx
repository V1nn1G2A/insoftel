'use client'

import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'

import useRedirectEffect from '@/hooks/useRedirectEffect'
import { useScrollLock } from '@/hooks/useScrollLock'

import LogoIcon from '@assets/icons/logo.svg'

import Menu from './_components/Menu'

import styles from './index.module.scss'

const Header = () => {
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

  useRedirectEffect(
    useCallback(() => {
      setIsOpen(false)

      window.scrollTo(0, 0)
    }, [])
  )

  return (
    <header
      className={cx(styles.header, styles[`header--${theme}`], {
        [styles['header--active']]: isOpen,
      })}
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
