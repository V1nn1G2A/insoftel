'use client'

import classNames from 'classnames/bind'
import { useRef } from 'react'
import type { FC } from 'react'

import { AnimatedLine, AnimationBlock } from '@/ui'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IQuote {
  author: string
  className?: string
  wrapperClassName?: string
  contentClassName?: string
  authorClassName?: string
  children: string
  id?: string
}

const Quote: FC<IQuote> = ({
  author,
  className,
  wrapperClassName,
  contentClassName,
  authorClassName,
  children,
  id,
}) => {
  const ref = useRef(null)

  return (
    <div className={cx('wrapper', className)}>
      <AnimatedLine
        targetRef={ref}
        className={cx('line')}
        x={-2000}
      />
      <div
        className={cx('quote')}
        id={id}
        ref={ref}
      >
        <div className={cx('wrapper', wrapperClassName)}>
          <AnimationBlock
            className={cx('quote__content', contentClassName)}
            type="p"
          >
            &quot; {children} &quot;
          </AnimationBlock>
          <AnimationBlock
            type="p"
            className={cx('quote__author', authorClassName)}
          >
            {author}
          </AnimationBlock>
        </div>
      </div>
      <AnimatedLine
        targetRef={ref}
        className={cx('line')}
      />
    </div>
  )
}

export default Quote
