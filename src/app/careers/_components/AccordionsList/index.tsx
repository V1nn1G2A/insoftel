'use client'

import type { FC } from 'react'
import { useState } from 'react'

import items from '../../constants/OPENING'
import Accordion from '../Accordion'
import Form from '../Form'

interface IAccordionsList {
  className?: string
}

const AccordionsList: FC<IAccordionsList> = ({ className }) => {
  const [activeItem, setActiveItem] = useState(-1)

  const handleClick = (index: number) => {
    setActiveItem(prev => (index === prev ? -1 : index))
  }

  return (
    <div className={className}>
      {items.map((el, index) => (
        <Accordion
          title={el.title}
          onClick={() => handleClick(index)}
          isActive={activeItem === index}
          key={index}
        >
          <Form id={el.id} />
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionsList
