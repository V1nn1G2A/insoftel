import { ExploreButton } from '../Buttons'
import Container from '../Container'
import VideoBackground from '../VideoBackground'

import styles from './index.module.scss'

const SectionHeading = ({
  title,
  letter,
}: {
  title: string
  letter: string
}) => (
  <VideoBackground
    src={'/video/section-background.mp4'}
    className="section"
  >
    <Container>
      <div className={styles.heading}>
        <span className={styles.letter}>{letter}</span>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.miniTitle}>{title.toUpperCase()}</h1>
        <div className={styles.miniButton}>
          <ExploreButton
            classNames={['mini-text', 'mini-round', 'mini-button']}
          />
        </div>
        <div className={styles.button}>
          <ExploreButton classNames={['mini-text']} />
        </div>
      </div>
    </Container>
  </VideoBackground>
)

export default SectionHeading
