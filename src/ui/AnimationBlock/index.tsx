'use client'

import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { FC, JSX } from 'react'

import disolve from '@/animations/disolve'

interface Iindex {
  amount?: number
  type?: keyof JSX.IntrinsicElements
  animation?: Variants
  children?: React.ReactNode
  className?: string
}

const index: FC<Iindex> = ({
  type = 'div',
  amount = 0.5,
  children,
  animation = disolve,
  className,
}) => {
  const MotionElement = motion(type)

  return (
    <MotionElement
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      variants={animation}
      className={className}
    >
      {children}
    </MotionElement>
  )
}

export default index
