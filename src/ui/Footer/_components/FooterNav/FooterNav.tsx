import Link from 'next/link'

import styles from './FooterNav.module.scss'

const FooterNav = () => (
  <nav className={styles.footerNav}>
    <ul className={styles.footerNav__list}>
      <li className={styles.footerNav__item}>
        <Link href="/services">Services</Link>
      </li>
      <li className={styles.footerNav__item}>
        <Link href="/technologies">Technologies</Link>
      </li>
      <li className={styles.footerNav__item}>
        <Link href="/products">Products</Link>
      </li>
      <li className={styles.footerNav__item}>
        <Link href="/careers">Careers</Link>
      </li>
      <li className={styles.footerNav__item}>
        <Link href="/contacts">Contacts</Link>
      </li>
    </ul>
  </nav>
)

export default FooterNav
