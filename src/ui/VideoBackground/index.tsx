import classNames from 'classnames/bind'
import type { FC, ReactNode } from 'react'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface Props {
  src: string
  poster?: string
  className?: string
  children?: ReactNode
}

const VideoBackground: FC<Props> = ({
  src,
  poster,
  className = '',
  children,
}) => (
  <div className={cx('wrapper')}>
    <video
      className={cx('video', className)}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
    >
      <source
        src={src}
        type="video/mp4"
      />
      <img
        src={poster}
        alt="Background fallback"
        className={cx('fallback')}
      />
    </video>
    {children}
  </div>
)

export default VideoBackground
