import styles from './index.module.scss'

const Heading = () => (
  <div className={styles.heading}>
    <div className={styles.content}>
      <h1 className={styles.title}>We’d Love to Hear from You!</h1>
      <p className={styles.text}>
        Whether you have a question about our services, are interested in a
        partnership, or want to learn more about our company, feel free to reach
        out.
      </p>
    </div>
    <div className={styles.letters}>
      <span className={styles.s}>S</span>
      <span className={styles.t}>T</span>
    </div>
  </div>
)

export default Heading
