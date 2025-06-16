import Link from 'next/link'
import type { FC } from 'react'

import {
  AnimationBlock,
  Container,
  SectionTitle,
  TextButton,
  VideoBackground,
} from '@/ui'

import AccordionsList from '../AccordionsList'

import styles from './index.module.scss'

const Technologies: FC = ({}) => (
  <section>
    <VideoBackground src={'/video/section-background.mp4'}>
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
            <AnimationBlock
              type="p"
              className={styles.technologies__text}
            >
              We leverage the latest technological advancements to ensure our
              clients receive highly efficient, custom software solutions
              tailored to their needs
            </AnimationBlock>
            <AccordionsList className={styles.technologies__accordion} />
            <AnimationBlock>
              <Link href={'/technologies'}>
                <TextButton
                  text="Explore Our Technologies"
                  variant="short"
                  classNames={[styles.technologies__button]}
                />
              </Link>
            </AnimationBlock>
          </div>
        </div>
      </Container>
    </VideoBackground>
  </section>
)

export default Technologies
