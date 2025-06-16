'use client'

import Link from 'next/link'
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
      id={title}
    >
      <AnimationBlock className={styles.AddressItem}>
        <h3 className={styles.title}>{title}</h3>
        {title === '[ Email ]' ? (
          <Link
            href={`mailto:${address}`}
            className={styles.text}
          >
            {address}
          </Link>
        ) : (
          <p className={styles.text}>{address}</p>
        )}
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
