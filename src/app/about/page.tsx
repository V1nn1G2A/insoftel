import { Metadata } from 'next'

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
    <>
      <Slogan />
      <QuoteSection />
      <AboutUs />
      <Expertise />
      <ChooseUs />
      <Commitment />
    </>
  )
}
