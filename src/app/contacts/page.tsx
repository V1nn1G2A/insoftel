import { Metadata } from 'next'

import { SectionsProvider } from '@/providers/ObserverProvider/contextProvider'
import { Container } from '@/ui'

import { Heading } from './_components'
import { Enquiries } from './_components'
import { ContactsBlock } from './_components'

import styles from './index.module.scss'

export const metadata: Metadata = {
  title: 'Insoftel Technologies - Contacts',
  description: 'Insoftel Technologies - Contacts',
}

const Contacts = () => (
  <SectionsProvider>
    <div data-section="contactsContent">
      <Container>
        <section className={styles.contacts}>
          <Heading />
          <Enquiries />
          <ContactsBlock />
        </section>
      </Container>
    </div>
  </SectionsProvider>
)

export default Contacts
