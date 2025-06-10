import cn from 'classnames/bind'
import type { ChangeEvent, FC } from 'react'

import styles from './index.module.scss'

interface IDragAndDrop {
  className?: string
  setFile: (file: File) => void
}

const cx = cn.bind(styles)

const DragAndDrop: FC<IDragAndDrop> = ({ setFile, className }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      console.log('Файл:', file)
      setFile(file)
    }
  }

  return (
    <>
      <input
        type="file"
        id="file"
        style={{ display: 'none' }}
        accept="image/png, image/jpg, .pdf, .docx, .doc"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file"
        className={cx('wrapper', className)}
      >
        <p className={styles.title}>Click to upload</p>
        <p className={styles.text}>
          Have supporting documents or files to share? Please, upload them here.
          Accepted file formats: PDF, DOC, DOCX, JPG, PNG. Max file size: 10MB.
        </p>
      </label>
    </>
  )
}
export default DragAndDrop
