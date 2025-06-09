import ErrorContent from './ErrorContent'
import styles from './index.module.scss'

const ErrorPage = () => (
    <div className={styles.error__page}>
        <ErrorContent code='404' message='Page Not Found' />
    </div>
)

export default ErrorPage