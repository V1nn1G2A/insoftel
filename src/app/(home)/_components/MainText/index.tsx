import cn from 'classnames/bind'
import type { CSSProperties, FC } from 'react'

import styles from './index.module.scss'

interface MainTextProps {
  children: string
  hideWidth?: boolean
  direction?: 'left' | 'right'
  appearDelay?: number
  disappearDelay?: number
  leaveFirstLetter?: boolean
}

const cx = cn.bind(styles)

const MainText: FC<MainTextProps> = ({
  children,
  hideWidth = false,
  direction = 'right',
  appearDelay = 0.05,
  disappearDelay = 0.05,
}) => {
  const array = children.split('')
  const width = hideWidth ? '0' : 'max-content'
  const overflow = hideWidth ? 'hidden' : 'show'

  const appearDuration = (array.length * 0.5) / 2 // 1.5s для 6 букв
  const disappearDuration = (array.length * 0.5) / 3 // 1s для 6 букв

  return (
    <p
      className={cx('word')}
      style={{ '--overflow': overflow } as CSSProperties}
    >
      {array.map((el, i) => {
        const countDissapear = direction === 'left' ? array.length - i : i

        return (
          <span
            key={i}
            style={
              {
                '--count': i,
                '--count-dissapear': countDissapear,
                '--width': width,
                '--appear-delay': appearDelay,
                '--disappear-delay': disappearDelay,
                '--length': array.length,
                '--appear-duration': `${appearDuration}s`,
                '--disappear-duration': `${disappearDuration}s`,
              } as CSSProperties
            }
            className={cx('letter')}
          >
            {el}
          </span>
        )
      })}
    </p>
  )
}

export default MainText
