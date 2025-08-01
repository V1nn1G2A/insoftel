'use client'

import classNames from 'classnames/bind'

import ArrowIcon from '@/assets/icons/arrow.svg'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

interface IExploreButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'short' | 'long'
  colorVariant?: 'light' | 'dark'
  classNames?: string[]
  isVisible?: boolean
  disabled?: boolean
  onClick?: () => void
}

const TextButton: React.FC<IExploreButton> = ({
  text = 'More About Us',
  colorVariant = 'light',
  variant = 'short',
  isVisible,
  classNames,
  disabled,
  onClick,
}) => {
  const [contactsButton, contactsText, size, round] = classNames ?? []

  const buttonClasses = cx(
    'button',
    variant,
    colorVariant,
    size,
    { disabled: disabled },
    {
      notVisible: !isVisible,
    }
  )

  const handleClick = () => {
    if (!disabled) onClick?.()
  }

  return (
    <button
      className={cx(buttonClasses, contactsButton)}
      onClick={handleClick}
      disabled={disabled}
    >
      <p className={cx('text', variant, colorVariant, contactsText)}>{text}</p>
      <div className={cx('round', variant, colorVariant, round)}>
        <ArrowIcon className={cx('arrow', variant, colorVariant)} />
      </div>
    </button>
  )
}
export default TextButton
