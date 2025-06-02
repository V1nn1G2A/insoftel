import type { FC } from 'react'

import { Container, SectionTitle, TextButton, VideoBackground } from '@/ui'

import AccordionsList from '../AccordionsList'

import styles from './Technologies.module.scss'

const Technologies: FC = ({}) => (
  <section>
    <VideoBackground src={'/video/background.mp4'}>
      <Container>
        <div className={styles.technologies}>
          <SectionTitle
            index="02"
            appereance="light"
            className={styles.technologies__title}
          >
            Technologies
          </SectionTitle>
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
