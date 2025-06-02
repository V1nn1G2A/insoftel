import Container from '../Container'
import Copyright from './_components/Copyright'
import FooterInfo from './_components/FooterInfo'

import styles from './index.module.scss'

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
