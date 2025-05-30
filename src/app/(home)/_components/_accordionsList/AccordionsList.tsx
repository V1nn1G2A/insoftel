import type { FC } from 'react'

import { Accordion } from '@/ui/Accordion'

import accordion from '../../_constants/ACCORDION'

import styles from './AccordionList.module.scss'

interface IAccordionList {
  className?: string
}

const AccordionsList: FC<IAccordionList> = ({ className }) => {
  const accordionArray = Object.entries(accordion)

  return (
    <div className={`${styles.accordion} ${className}`}>
      {accordionArray.map(([title, content], index) => (
        <Accordion
          key={title}
          title={title}
          content={content}
          isLine={index !== accordionArray.length - 1}
        />
      ))}
    </div>
  )
}

export default AccordionsList
