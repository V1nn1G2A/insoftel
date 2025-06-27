import type { FC } from 'react'

import { Paragraph } from '@/ui'

import type { IPaginatedInfo } from '../../model/IPagintedInfo'

import styles from './index.module.scss'

interface IParagraphsList {
  paragraphs: IPaginatedInfo[]
  className?: string
}

export const ParagraphsList: FC<IParagraphsList> = ({
  paragraphs,
  className,
}) => (
  <div className={className}>
    {paragraphs.map(({ title, text, width }) => (
      <Paragraph
        isAnimated={false}
        key={title}
        title={title}
        lines={[text]}
        className={['pagination-block', 'paginated-title']}
        width={width}
      />
    ))}
  </div>
)
