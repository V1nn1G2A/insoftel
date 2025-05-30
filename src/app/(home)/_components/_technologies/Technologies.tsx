import type { FC } from 'react'

import { TextButton } from '@/ui/Buttons/TextButton'
import { Container } from '@/ui/Container'
import { Header } from '@/ui/Header'
import { VideoBackground } from '@/ui/VideoBackground'

import AccordionsList from './components/AccordionsList/AccordionsList'

import styles from './Technologies.module.scss'

const Technologies: FC = ({}) => (
  <section>
    <VideoBackground src={'/video/background.mp4'}>
      <Container>
        <div className={styles.technologies}>
          <Header
            index="02"
            appereance="light"
            className={styles.technologies__title}
          >
            Technologies
          </Header>
          <div className={styles['technologies__text-container']}>
            <p className={styles.technologies__text}>
              We leverage the latest technological advancements to ensure our
              clients receive highly efficient, custom software solutions
              tailored to their needs
            </p>
            <AccordionsList className={styles.technologies__accordion} />
            <TextButton
              text="Explore Our Technologies"
              variant="short"
              className={styles.technologies__button}
            />
          </div>
        </div>
      </Container>
    </VideoBackground>
  </section>
)

export default Technologies
