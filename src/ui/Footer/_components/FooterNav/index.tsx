import Link from 'next/link'

import { AnimationBlock } from '@/ui'

import footerNav from '../../_constants/FOOTER_NAV'

import styles from './index.module.scss'

const FooterNav = () => (
  <div className={styles.footerNav}>
    <nav>
      <ul className={styles.footerNav__list}>
        {footerNav.map(el => (
          <li
            className={styles.footerNav__item}
            key={el}
          >
            <Link href={`/${el.toLowerCase()}`}>
              <AnimationBlock type="span">{el}</AnimationBlock>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

export default FooterNav
