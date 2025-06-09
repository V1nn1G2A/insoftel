'use client'

import { useRef } from 'react'

import { AnimatedLine, AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const AddressItem = ({
  title,
  address,
}: {
  title: string
  address: string
}) => {
  const ref = useRef(null)

  return (
    <div
      className={styles.address__wrapper}
      ref={ref}
    >
      <AnimationBlock className={styles.AddressItem}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{address}</p>
      </AnimationBlock>
      <AnimatedLine
        targetRef={ref}
        className={styles.border}
        x={-640}
      />
    </div>
  )
}

export default AddressItem
