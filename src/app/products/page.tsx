import { Metadata } from 'next'

import Header from './_components/Header'
import ProductsList from './_components/ProductsList'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Products',
  description: 'Insoftel Technologies - Products',
}
export default function Products() {
  return (
    <>
      <Header />
      <ProductsList />
    </>
  )
}
