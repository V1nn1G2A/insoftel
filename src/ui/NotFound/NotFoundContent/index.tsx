import { TextButton } from '@/ui/Buttons'
import styles from './index.module.scss'

interface INotFoundContent {
    code: string
    message: string
}

const NotFoundContent: React.FC<INotFoundContent> = ({code, message}) => (
    <div className={styles.error}>
        <p className={styles.error__code}>{code}</p>
        <p className={styles.error__message}>{message}</p>
        <TextButton text='Take me home' variant='short' colorVariant='dark'/>
    </div>
)

export default NotFoundContent