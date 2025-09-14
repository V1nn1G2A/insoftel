'use client'

import type { FC } from 'react'
import { useState } from 'react'

import { usePopupDispatch } from '@/ui/Popup/PopupContext'

import items from '../../constants/OPENING'
import Accordion from '../Accordion'
import Form from '../Form'
import Privacy from '../Privacy'

import styles from './index.module.scss'

interface IAccordionsList {
  className?: string
}

const AccordionsList: FC<IAccordionsList> = ({ className }) => {
  const [activeItem, setActiveItem] = useState(-1)

  const handleClick = (index: number) => {
    setActiveItem(prev => (index === prev ? -1 : index))
  }

  const { openPopup } = usePopupDispatch()

  return (
    <div className={className}>
      {items.map((el, index) => (
        <Accordion
          title={el.title}
          onClick={() => handleClick(index)}
          isActive={activeItem === index}
          key={index}
          className={styles.accordion}
        >
          <Form
            id={el.id}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              openPopup(<Privacy />)
            }}
            position={el.title}
          />
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionsList
