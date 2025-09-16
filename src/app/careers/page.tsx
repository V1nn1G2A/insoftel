import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'

import { Header, Openings, Why } from './_components'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Insoftel Technologies - Careers',
  description: 'Insoftel Technologies - Careers',
}

export default function Careers() {
  return (
    <SectionsProvider>
      <div data-section="careersContent">
        <Header />
        <Openings />
      </div>
      <div data-section="careersWhy">
        <Why />
      </div>
    </SectionsProvider>
  )
}
