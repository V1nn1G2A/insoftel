import VideoBackground from '../VideoBackground'
import NotFoundContent from './NotFoundContent'
import styles from './index.module.scss'

const NotFoundPage = () => (
    <VideoBackground src={'/video/not-found.mp4'} className={styles.video}>
        <div className={styles.error__page}>
            <NotFoundContent code='404' message='Page Not Found' />
        </div>
    </VideoBackground>
)

export default NotFoundPage