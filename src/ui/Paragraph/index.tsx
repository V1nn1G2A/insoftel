'use client'

import classNames from 'classnames/bind'

import { AnimationBlock } from '@/ui'

import AnimatedText from '../AnimatedText/index'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IParagraph {
  title: string
  lines: string[]
  className?: string[]
  width?: string
  isAnimated?: boolean
}

const Paragraph: React.FC<IParagraph> = ({
  title,
  lines,
  className,
  width,
  isAnimated = true,
}) => {
  return (
    <div className={cx('paragraph', className, width)}>
      <h3 className={cx('title')}>
        {isAnimated ? <AnimatedText height={35}>{title}</AnimatedText> : title}
      </h3>
      <div>
        {lines.map(line => (
          <AnimationBlock
            isAnimated={isAnimated}
            type="span"
            key={line}
            className={cx('text')}
          >
            {line}
          </AnimationBlock>
        ))}
      </div>
    </div>
  )
}

export default Paragraph
