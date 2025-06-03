import styles from './index.module.scss'

const Enquiries = () => (
  <div className={styles.enquiries}>
    <h2 className={styles.title}>General Enquiries</h2>
    <p className={styles.text}>
      For general information or specific questions, please email us at
      <b className={styles.mail}> info@insofteltechnologies.com</b> We’ll
      respond promptly to assist with any queries.
    </p>
  </div>
)

export default Enquiries
