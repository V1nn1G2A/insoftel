import classNames from 'classnames'
import type { FC } from 'react'

import { AnimationBlock } from '../'

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
}) => (
  <div
    className={`${styles.quote} ${className}`}
    id={id}
  >
    <div className={cx(styles.wrapper, wrapperClassName)}>
      <AnimationBlock
        className={cx(styles.quote__content, contentClassName)}
        type="p"
      >
        &quot; {children} &quot;
      </AnimationBlock>
      <AnimationBlock
        type="p"
        className={cx(styles.quote__author, authorClassName)}
      >
        {author}
      </AnimationBlock>
    </div>
  </div>
)

export default Quote
