import type { FC } from 'react'

import styles from './Picture.module.scss'

export interface IPicture extends React.HTMLProps<HTMLPictureElement> {
  webp?: string
  webp2x?: string
  src?: string
  src2x?: string
  className?: string
  alt?: string
  isLazyLoading?: boolean
}

// const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const Picture: FC<IPicture> = ({
  webp,
  webp2x,
  src,
  src2x,
  className,
  alt,
  isLazyLoading,
}) => (
  <div className={`${styles.picture} ${className}`}>
    <picture>
      {(webp || webp2x) && (
        <source
          srcSet={`
        ${webp} 1x,
        ${webp2x} 2x
      `}
          type="image/webp"
        />
      )}
      <img
        src={`${src}`}
        srcSet={`
        ${src} 1x,
        ${src2x} 2x
      `}
        alt={alt}
        loading={isLazyLoading ? 'lazy' : undefined}
      />
    </picture>
  </div>
)

export default Picture
