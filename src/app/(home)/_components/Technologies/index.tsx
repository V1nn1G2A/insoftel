import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { AnimationBlock, Container, SectionTitle, TextButton } from '@/ui'

import AccordionsList from '../AccordionsList'

import styles from './index.module.scss'

const Technologies: FC = ({}) => (
  <section className={styles.technologies}>
    <Image
      src={'/img/technologies/tech_home.webp'}
      alt="Technologies"
      width={1920}
      height={1080}
      className={styles.technologies__image}
    />
    {/* <VideoBackground src={'/video/background.mp4'}> */}
    <Container>
      <div className={styles.technologies__content}>
        <SectionTitle
          index="02"
          appereance="light"
          className={styles.technologies__content__title}
        >
          Technologies
        </SectionTitle>
        <div className={styles.technologies__content__textContainer}>
          <AnimationBlock
            type="p"
            className={cx(
              styles.technologies__content__text,
              styles.willChange
            )}
          >
            We leverage the latest technological advancements to ensure our
            clients receive highly efficient, custom software solutions tailored
            to their needs
          </AnimationBlock>
          <AccordionsList className={styles.technologies__content__accordion} />
          <AnimationBlock className={styles.willChange}>
            <Link href={'/technologies'}>
              <TextButton
                text="Explore Our Technologies"
                variant="short"
                classNames={[styles.technologies__content__button]}
              />
            </Link>
          </AnimationBlock>
        </div>
      </div>
    </Container>
    {/* </VideoBackground> */}
  </section>
)

export default Technologies
