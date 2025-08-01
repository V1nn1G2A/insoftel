import Link from 'next/link'

import { AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const FooterAddress = () => (
  <div className={styles.footerAddress}>
    <ul className={styles.footerAddress__list}>
      <li className={styles.footerAddress__item}>
        <AnimationBlock
          type="span"
          className={styles.footerAddress__subtitle}
        >
          [ Office ]
        </AnimationBlock>
        <AnimationBlock type="p">
          The Binary Tower, 32 Marasi Drive St., Business Bay, Dubai, UAE
        </AnimationBlock>
      </li>
      <li className={styles.footerAddress__item}>
        <AnimationBlock
          type="span"
          className={styles.footerAddress__subtitle}
        >
          [ Email ]
        </AnimationBlock>
        <Link
          href="mailto:info@insofteltechnologies.com"
          className={styles.link}
        >
          <AnimationBlock type="span">
            info@insofteltechnologies.com
          </AnimationBlock>
        </Link>
      </li>
    </ul>
  </div>
)

export default FooterAddress
