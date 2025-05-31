import Link from 'next/link'

import styles from './FooterAddress.module.scss'

const FooterAddress = () => (
  <div className={styles.footerAddress}>
    <ul className={styles.footerAddress__list}>
      <li className={styles.footerAddress__item}>
        <span className={styles.footerAddress__subtitle}>
          [ Head Office – Dubai ]
        </span>
        <p>The Binary Tower, 32 Marasi Drive St., Business Bay, Dubai, UAE</p>
      </li>
      <li className={styles.footerAddress__item}>
        <span className={styles.footerAddress__subtitle}>
          [ Office – Istanbul ]
        </span>
        <p>
          Business Center, Nur Sokak 2A, Merdivenköy, Kadıköy, Istanbul, Turkey
        </p>
      </li>
      <li className={styles.footerAddress__item}>
        <span className={styles.footerAddress__subtitle}>[ Email ]</span>
        <Link
          href="mailto:info@insofteltechnologies.com"
          className={styles.link}
        >
          info@insofteltechnologies.com
        </Link>
      </li>
    </ul>
  </div>
)

export default FooterAddress
