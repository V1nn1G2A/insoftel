import type { FC, Ref } from 'react'

import AnimatedText from '../AnimatedText'

import styles from './index.module.scss'

interface IBigLetter {
  className?: string
  children: string
  ref?: Ref<HTMLSpanElement>
  isAnimated?: boolean
}

const BigLetter: FC<IBigLetter> = ({
  className,
  children,
  ref,
  isAnimated,
}) => (
  <span
    className={`${styles.letter} ${className}`}
    ref={ref}
  >
    <AnimatedText
      height={70}
      isAnimated={isAnimated}
    >
      {children}
    </AnimatedText>
  </span>
)

export default BigLetter
