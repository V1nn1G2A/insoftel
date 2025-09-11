'use client'

import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import type { FC, JSX } from 'react'
import { useMemo, useState } from 'react'

import disolve from '@/animations/disolve'

interface IAnimationBlock {
  amount?: number
  type?: keyof JSX.IntrinsicElements
  animation?: Variants
  children?: React.ReactNode
  className?: string
  isAnimated?: boolean
  isOnce?: boolean
  margin?: string
}

const AnimationBlock: FC<IAnimationBlock> = ({
  type = 'div',
  amount = 0.5,
  children,
  animation = disolve,
  className,
  isAnimated = true,
  margin,
}) => {
  const MotionElement = useMemo(() => motion(type), [type])
  const [hasAnimated, setHasAnimated] = useState(false)

  const Type = type

  if (!isAnimated) return <Type className={className}>{children}</Type>

  return (
    <MotionElement
      initial="hidden"
      animate={hasAnimated ? 'visible' : undefined}
      whileInView={!hasAnimated ? 'visible' : undefined}
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true, amount, margin }}
      variants={animation}
      className={className}
    >
      {children}
    </MotionElement>
  )
}

export default AnimationBlock
