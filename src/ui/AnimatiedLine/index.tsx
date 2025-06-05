import cn from 'classnames'
import { motion, useInView } from 'motion/react'
import type { FC, RefObject } from 'react'

import fromLeft from '@/animations/fromLeft'

import styles from './index.module.scss'

interface IAnimatedLine {
  ref: RefObject<Element | null>
  className?: string
}

const cx = cn.bind(styles)

const AnimatedLine: FC<IAnimatedLine> = ({ ref, className }) => {
  const isInView = useInView(ref)

  return (
    <motion.span
      variants={fromLeft}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cx('line', className)}
    />
  )
}
export default AnimatedLine
