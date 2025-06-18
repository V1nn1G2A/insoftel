'use client'

import cn from 'classnames/bind'
import type { ChangeEvent, DragEvent, FC } from 'react'
import { useState } from 'react'

import styles from './index.module.scss'

interface IDragAndDrop {
  className?: string
  setFile: (file: File) => void
  id: string
}

const cx = cn.bind(styles)

const maxSize = 10

const acceptedTypes = [
  'application/pdf', // PDF
  'application/msword', // DOC
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
  'image/jpeg', // JPG
  'image/png', // PNG
]

const DragAndDrop: FC<IDragAndDrop> = ({ setFile, className, id }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleSetFile = (file: File) => {
    if (file.size > maxSize * 1024 * 1024) return
    if (!acceptedTypes.includes(file.type)) return
    setFile(file)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      handleSetFile(file)
      e.target.value = ''
    }
  }

  const handleDragActive = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragUnactive = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files?.[0]) handleSetFile(files[0])
  }

  return (
    <div
      onDragOver={handleDragActive}
      onDragLeave={handleDragUnactive}
      onDrop={handleDrop}
      onDragEnd={handleDragUnactive}
      onDragEnter={handleDragActive}
    >
      <input
        type="file"
        id={id}
        style={{ display: 'none' }}
        accept="image/png, image/jpg, .pdf, .docx, .doc"
        onChange={handleFileChange}
      />
      <label
        htmlFor={id}
        className={cx('wrapper', className, { 'wrapper-dragged': isDragging })}
      >
        <p className={styles.title}>Click to upload</p>
        <p className={styles.text}>
          Have supporting documents or files to share? Please, upload them here.
          Accepted file formats: PDF, DOC, DOCX, JPG, PNG. Max file size: 10MB.
        </p>
      </label>
    </div>
  )
}
export default DragAndDrop
