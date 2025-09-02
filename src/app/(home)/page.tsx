import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'

import { Company, Main, Products, Services, Technologies } from './_components'

export default function Home() {
  return (
    <SectionsProvider>
      <div data-section="main">
        <Main />
      </div>
      <div data-section="services">
        <Services />
      </div>
      <div data-section="technologies">
        <Technologies />
      </div>
      <div data-section="company">
        <Company />
      </div>
      <div data-section="products">
        <Products />
      </div>
    </SectionsProvider>
  )
}
