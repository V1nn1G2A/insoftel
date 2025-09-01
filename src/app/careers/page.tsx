import { Metadata } from 'next'

import { Header, Openings, Why } from './_components'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Careers',
  description: 'Insoftel Technologies - Careers',
}

export default function Careers() {
  return (
    <>
      <Header />
      <Openings />
      <Why />
    </>
  )
}
