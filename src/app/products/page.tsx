import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'

import Header from './_components/Header'
import ProductsList from './_components/ProductsList'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Insoftel Technologies - Products',
  description: 'Insoftel Technologies - Products',
}
export default function Products() {
  return (
    <SectionsProvider>
      <div data-section="productsContent">
        <Header />
        <ProductsList />
      </div>
    </SectionsProvider>
  )
}
