'use client'

import cn from 'classnames/bind'
import { motion } from 'motion/react'
import type { FC } from 'react'

import scale from '@/animations/scale'

import styles from './index.module.scss'

interface Iindex {
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  className?: string
  containerClassName?: string
}

const cx = cn.bind(styles)

const MotionSvg: FC<Iindex> = ({ Svg, className, containerClassName }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={scale}
    className={cx(styles.container, containerClassName)}
  >
    <Svg className={cx(className)} />
  </motion.div>
)

export default MotionSvg
