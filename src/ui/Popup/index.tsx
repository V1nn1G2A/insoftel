'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { usePopupDispatch } from './PopupContext'
import { usePopupState } from './PopupContext'

import styles from './index.module.scss'

export const Popup = () => {
  const { closePopup } = usePopupDispatch()
  const { isPopupOpen, popupContent } = usePopupState()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isPopupOpen) return null

  return createPortal(
    <div
      className={styles.popup}
      id="popup"
      onClick={closePopup}
    >
      <div
        className={styles.content}
        onClick={e => e.stopPropagation()}
      >
        {popupContent || 'Пустой попап'}
      </div>
    </div>,
    document.getElementById('portal-root')!
  )
}
