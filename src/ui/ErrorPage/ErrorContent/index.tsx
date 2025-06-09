import { TextButton } from '@/ui/Buttons'
import styles from './index.module.scss'

interface IErrorContent {
    code: string
    message: string
}

const ErrorContent: React.FC<IErrorContent> = ({code, message}) => (
    <div className={styles.error}>
        <p className={styles.error__code}>{code}</p>
        <p className={styles.error__message}>{message}</p>
        <TextButton text='Take me home' variant='short' colorVariant='dark'/>
    </div>
)

export default ErrorContent