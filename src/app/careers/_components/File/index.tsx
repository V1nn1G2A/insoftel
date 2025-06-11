'use client'

import cn from 'classnames/bind'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import CrossIcon from '@/assets/icons/cross.svg'
import PinIcon from '@/assets/icons/pin.svg'

import styles from './index.module.scss'

interface IFile {
  file: File | null
  deleteFile: () => void
  className?: string
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${Math.round(bytes / Math.pow(k, i))} ${sizes[i]}`
}

const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const cx = cn.bind(styles)

const File: FC<IFile> = ({ file, deleteFile, className }) => {
  const [load, setLoad] = useState(0)

  const fakeLoading = () => {
    const randomValue = getRandomValue(7, 20)
    setLoad(prev => {
      const sum = prev + randomValue
      if (sum >= 100) return 100
      return sum
    })
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (file) interval = setInterval(fakeLoading, 110)
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [file])

  const gradientStyle = {
    background: `linear-gradient(
      to right,
      rgba(21, 23, 25, ${0.15 - 0.1 * (load / 100)}) 0%,
      rgba(21, 23, 25, ${0.15 - 0.1 * (load / 100)}) ${load}%,
      rgba(21, 23, 25, 0.15) ${load}%,
      rgba(21, 23, 25, 0.15) 100%
    )`,
  }

  return (
    <div
      className={cx('file', className)}
      style={gradientStyle}
    >
      <PinIcon className={styles.pin} />
      <div>
        <p className={styles.file__title}>{file?.name || ''}</p>
        <p className={styles.file__size}>{formatFileSize(file?.size || 0)}</p>
      </div>
      <button
        onClick={deleteFile}
        className={styles.button}
      >
        <CrossIcon />
      </button>
      <p className={styles.file__loading}>{load}%</p>
    </div>
  )
}

export default File
