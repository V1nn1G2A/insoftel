'use client'

import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useScrollLock } from '@/hooks/useScrollLock'

import LogoIcon from '@assets/icons/logo.svg'

import Container from '../Container'
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
  const lightPaths = ['about', 'careers', 'contacts']

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

  return (
    <header
      className={cx(styles.header, styles[`header--${theme}`], {
        [styles['header--active']]: isOpen,
      })}
    >
      <Container>
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
      </Container>
    </header>
  )
}

export default Header
