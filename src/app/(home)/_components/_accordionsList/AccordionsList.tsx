'use client'

import type { FC } from 'react'
import { useState } from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Accordion } from '@/ui/Accordion'

import accordions from '../../_constants/ACCORDION'

import styles from './AccordionList.module.scss'

interface IAccordionList {
  className?: string
}

const AccordionsList: FC<IAccordionList> = ({ className }) => {
  const accordionArray = Object.entries(accordions)
  const [activeItem, setActiveItem] = useState(-1)
  const isTablet = useMediaQuery('(max-width: 1279px)')

  const handleClick = (index: number) => {
    if (isTablet) setActiveItem(prev => (prev === index ? -1 : index))
  }

  return (
    <div className={`${styles[`accordion-wrapper`]}`}>
      <div className={`${styles.accordion} ${className}`}>
        {accordionArray.map(([title, content], index) => (
          <Accordion
            key={title}
            title={title}
            content={content}
            isLine={index !== accordionArray.length - 1}
            isActive={activeItem === index}
            onClick={() => {
              handleClick(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AccordionsList
