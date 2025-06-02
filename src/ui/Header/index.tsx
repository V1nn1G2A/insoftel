import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'
import Menu from './Menu'

import styles from './index.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link
          href="/"
          className={styles.logo}
        >
          <Image
            src={'/img/header/1.png'}
            width={128}
            height={11}
            alt="logo"
          />
        </Link>
        <Menu />
      </Container>
    </header>
  )
}

export default Header
