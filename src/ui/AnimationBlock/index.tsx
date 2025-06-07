'use client'

import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { FC, JSX } from 'react'

import disolve from '@/animations/disolve'

interface IAnimationBlock {
  amount?: number
  type?: keyof JSX.IntrinsicElements
  animation?: Variants
  children?: React.ReactNode
  className?: string
  isAnimated?: boolean
}

const AnimationBlock: FC<IAnimationBlock> = ({
  type = 'div',
  amount = 0.5,
  children,
  animation = disolve,
  className,
  isAnimated = true,
}) => {
  const MotionElement = motion(type)

  const Type = type

  if (!isAnimated) return <Type className={className}>{children}</Type>

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

export default AnimationBlock
