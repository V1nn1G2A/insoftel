import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'
import SectionHeading from '@/ui/SectionHeading'

import { PaginatedContainer } from './_components/PaginatedContainer'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Services',
  description: 'Insoftel Technologies - Services',
}

const Services = () => (
  <SectionsProvider>
    <div data-section="servicesHeading">
      <SectionHeading
        title="Services"
        letter="S"
      />
    </div>
    <PaginatedContainer />
  </SectionsProvider>
)

export default Services
