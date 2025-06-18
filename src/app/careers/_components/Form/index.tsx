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
}

const cx = cn.bind(styles)

const Form: FC<IForm> = ({ id, className }) => {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(formSchema),
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSucces, setIsSuccess] = useState(false)
  const { openPopup } = usePopupDispatch()

  const isFilled =
    watch('name') &&
    watch('email') &&
    watch('letter') &&
    watch('phoneOrTelegram') &&
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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(getValues())
    console.log(file)
    handleOpenInfo()
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
          id={id + el.label}
          label={el.label}
          {...register(el.id)}
          isFulled={!!watch(el.id)}
          error={errors[el.id]?.message}
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
        <a href="#"> Privacy Policy </a>
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
