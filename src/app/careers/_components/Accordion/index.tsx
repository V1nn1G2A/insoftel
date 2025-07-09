import cn from 'classnames/bind'
import { motion } from 'motion/react'
import { type FC } from 'react'

import animation from '@/animations/disolve'
import Arrow from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

interface IAccordion {
  title: string
  className?: string
  children?: React.ReactNode
  isActive?: boolean
  onClick: () => void
}

const cx = cn.bind(styles)

const Accordion: FC<IAccordion> = ({
  title,
  className,
  children,
  isActive,
  onClick,
}) => {
  const classNames = cx(
    styles.accordion,
    { [styles['accordion--active']]: isActive },
    className
  )

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animation}
      className={classNames}
    >
      <button
        className={styles.trigger}
        onClick={onClick}
      >
        <p className={styles.triggerTitle}>{title}</p>
        <span className={styles.triggerIconWrapper}>
          <span className={styles.triggerIconLabel}>Learn More</span>
          <Arrow />
        </span>
      </button>
      <div className={styles.content}>
        <div className={styles.contentFlex}>{children}</div>
      </div>
    </motion.div>
  )
}

export default Accordion
