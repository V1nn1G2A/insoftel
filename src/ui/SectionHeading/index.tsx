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
}) => {
  let width

  switch (title) {
    case 'Services':
      width = '72.79px'
      break
    case 'Technologies':
      width = '117.68px'
  }

  return (
    <div>
    <VideoBackground
      src={'/video/section-background.mp4'}
      className="section"
    >
      <Container>
        <div className={styles.heading}>
          <span className={styles.letter}>{letter}</span>
          <h1 className={styles.title}>{title}</h1>
          <h1
            className={styles.miniTitle}
            style={
              { '--width': width } as React.CSSProperties & {
                [key: string]: string
              }
            }
          >
            {title.toUpperCase()}
          </h1>
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
    </div>
  )
}
export default SectionHeading
