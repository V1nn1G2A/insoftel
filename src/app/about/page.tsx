import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'

import {
  AboutUs,
  ChooseUs,
  Commitment,
  Expertise,
  QuoteSection,
  Slogan,
} from './_components'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - About Us',
  description: 'Insoftel Technologies - About Us',
}

export default function About() {
  return (
    <SectionsProvider>
      <div data-section="aboutContent">
        <Slogan />
      </div>
      <div data-section="aboutContent">
        <QuoteSection />
        <AboutUs />
        <Expertise />
      </div>
      <div data-section="aboutWhy">
        <ChooseUs />
      </div>
      <div data-section="aboutContent">
        <Commitment />
      </div>
    </SectionsProvider>
  )
}
