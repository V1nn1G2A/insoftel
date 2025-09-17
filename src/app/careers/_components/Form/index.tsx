'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames/bind'
import type { FC, FormEvent } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { DragAndDrop, FormPopup, Input, TextButton } from '@/ui'
import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import inputs from '../../constants/FORM'
import File from '../File'
import Success from '../Success'
import formSchema from './formSchema'

import styles from './index.module.scss'

interface IForm {
  className?: string
  id: string
  position: string
  onClick: (e: React.MouseEvent) => void
}

const cx = cn.bind(styles)

const Form: FC<IForm> = ({ id, className, position, onClick }) => {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: { position },
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSucces, setIsSuccess] = useState(false)
  const { openPopup } = usePopupDispatch()

  const isFilled =
    watch('name') &&
    watch('email') &&
    watch('cover_letter') &&
    watch('contact') &&
    file &&
    Object.keys(errors).length === 0

  const handleOpenInfo = () => {
    const handleClick = () => {
      return !!isFilled ? setIsSuccess(true) : null
    }
    openPopup(
      <FormPopup
        isConfirm={!!isFilled}
        onClick={handleClick}
      />
    )
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()

    Object.entries(getValues()).forEach(([key, value]) => {
      formData.append(key, value)
    })

    if (file) {
      formData.append('files', file) // имя должно совпадать с тем, что ожидает сервер
    }

    try {
      fetch('https://insoftel.tecman.ru/api/v1/feedback', {
        method: 'POST',
        body: formData,
      })

      handleOpenInfo()
    } catch {}
  }

  if (isSucces) return <Success className={styles.success} />

  const classNames = cx('form', className, { formFilled: isFilled })

  return (
    <form
      className={classNames}
      onSubmit={handleFormSubmit}
    >
      {inputs.map(el => (
        <Input
          key={el.id}
          id={id + el.id} // 👈 используем id, а не label
          label={el.label}
          {...register(el.id)}
          isFulled={!!watch(el.id)}
          error={errors[el.id]?.message as string | undefined}
          className={errors[el.id] ? styles.inputError : ''}
        />
      ))}
      <DragAndDrop
        id={id}
        setFile={(file: File) => setFile(file)}
        className={styles.drop}
      />
      {file && (
        <File
          file={file}
          deleteFile={() => setFile(null)}
          className={styles.file}
        />
      )}
      <p className={styles.license}>
        By clicking the Submit button you agree to our
        <a onClick={onClick}> Privacy Policy </a>
        terms
      </p>
      <TextButton
        text="Submit"
        colorVariant="dark"
        variant="short"
        classNames={[styles.button, '', '']}
        type="submit"
      />
    </form>
  )
}

export default Form
