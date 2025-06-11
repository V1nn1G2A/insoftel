'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames/bind'
import type { FC } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { DragAndDrop, Input, TextButton } from '@/ui'

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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(formSchema),
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSucces, setIsSuccess] = useState(false)

  const isFilled =
    watch('name') &&
    watch('email') &&
    watch('letter') &&
    watch('phoneOrTelegram') &&
    file &&
    Object.keys(errors).length === 0

  if (isSucces) return <Success className={styles.success} />

  return (
    <form
      className={cx('form', className)}
      onSubmit={handleSubmit(data => {
        console.log(data)
        console.log(file)
        setIsSuccess(true)
      })}
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
      {file && (
        <File
          file={file}
          deleteFile={() => setFile(null)}
          className={styles.file}
        />
      )}
      <DragAndDrop
        id={id}
        setFile={(file: File) => setFile(file)}
        className={styles.drop}
      />
      <p className={styles.license}>
        By clicking the Submit button you agreeto our
        <a href="#"> Privacy Policy </a>
        terms
      </p>
      <TextButton
        text="Submit"
        colorVariant="dark"
        variant="short"
        classNames={[styles.button, '', '']}
        disabled={!isFilled}
        type="submit"
      />
    </form>
  )
}

export default Form
