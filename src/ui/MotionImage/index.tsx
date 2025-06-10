'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import type { FC } from 'react'

import scale from '@/animations/scale'

interface Iindex {
  width: number
  height: number
  src: string
  alt: string
  className?: string
}

const MotionImage = motion(Image)

const Motion: FC<Iindex> = ({ width, height, src, alt, className }) => (
  <MotionImage
    variants={scale}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    src={src}
    alt={alt || 'visuall image'}
    width={width}
    height={height}
    className={className}
  />
)

export default Motion
