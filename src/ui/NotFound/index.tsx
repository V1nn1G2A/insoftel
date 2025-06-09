import NotFoundContent from './NotFoundContent'
import styles from './index.module.scss'

const NotFoundPage = () => (
    <div className={styles.error__page}>
        <NotFoundContent code='404' message='Page Not Found' />
    </div>
)

export default NotFoundPage