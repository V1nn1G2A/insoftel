import type { FC, ReactNode } from 'react'

import styles from './index.module.scss'

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
  <div className={`${styles.wrapper} ${className}`}>
    <video
      className={styles.video}
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
        className={styles.fallback}
      />
    </video>
    {children}
  </div>
)

export default VideoBackground
