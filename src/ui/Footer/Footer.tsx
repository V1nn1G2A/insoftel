import { Container } from '../Container'
import Copyright from './_components/Copyright/Copyright'
import FooterInfo from './_components/FooterInfo/FooterInfo'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterInfo />
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
