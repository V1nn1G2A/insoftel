import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'

import { Company, Main, Products, Services, Technologies } from './_components'

export default function Home() {
  return (
    <SectionsProvider>
      <div data-section="homeMain">
        <Main />
      </div>
      <div data-section="homeServices">
        <Services />
      </div>
      <div data-section="homeTechnologies">
        <Technologies />
      </div>
      <div data-section="homeCompany">
        <Company />
      </div>
      <div data-section="homeProducts">
        <Products />
      </div>
    </SectionsProvider>
  )
}
