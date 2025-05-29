import Copyright from './_components/Copyright/Copyright'
import FooterInfo from './_components/FooterInfo/FooterInfo'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
      <Copyright />
    </footer>
  )
}

export default Footer
