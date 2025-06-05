import cn from 'classnames'
import { motion, useInView } from 'motion/react'
import type { FC, RefObject } from 'react'

import styles from './index.module.scss'

interface IAnimatedLine {
  targetRef: RefObject<Element | null>
  x?: number
  className?: string
}

const cx = cn.bind(styles)

const AnimatedLine: FC<IAnimatedLine> = ({
  targetRef,
  x = -700,
  className,
}) => {
  const isInView = useInView(targetRef)

  const fromLeft = {
    hidden: {
      x: x,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  }

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
