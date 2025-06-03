import styles from './index.module.scss'

const AddressItem = ({
  title,
  address,
}: {
  title: string
  address: string
}) => (
  <div className={styles.AddressItem}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{address}</p>
  </div>
)

export default AddressItem
