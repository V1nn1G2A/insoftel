import cn from 'classnames/bind'
import type { CSSProperties, FC } from 'react'

import styles from './index.module.scss'

interface MainTextProps {
  children: string
  hideWidth?: boolean
}

const cx = cn.bind(styles)

const MainText: FC<MainTextProps> = ({ children, hideWidth = false }) => {
  const array = children.split('')
  const width = hideWidth ? '0' : 'max-content'
  const overflow = hideWidth ? 'hidden' : 'show'

  return (
    <p
      className={cx('word')}
      style={{ '--overflow': overflow } as CSSProperties}
    >
      {array.map((el, i) => (
        <span
          key={i}
          style={
            {
              '--count': i,
              '--width': width,
            } as CSSProperties
          }
          className={cx('letter')}
        >
          {el}
        </span>
      ))}
    </p>
  )
}

export default MainText
