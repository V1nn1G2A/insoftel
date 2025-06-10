import cn from 'classnames/bind'
import type { FC } from 'react'

import { DragAndDrop, Input, TextButton } from '@/ui'

import styles from './index.module.scss'

interface IForm {
  className?: string
}

const cx = cn.bind(styles)

const Form: FC<IForm> = ({ className }) => (
  <form
    className={cx('form', className)}
    onSubmit={e => e.preventDefault()}
  >
    <Input label="Your name" />
    <Input label="Phone number or Telegram username" />
    <Input
      label="Email"
      type="email"
    />
    <Input label="Cover letter" />
    <DragAndDrop
      file={new File([], '', {})}
      setFile={() => {}}
      className={styles.drop}
    />
    <p className={styles.license}>
      By clicking the Submit button you agreeto our <a>Privacy Policy</a> terms
    </p>
    <TextButton
      text="Submit"
      colorVariant="dark"
      variant="short"
      classNames={[styles.button, '', '']}
      disabled
      type="submit"
    />
  </form>
)
export default Form
