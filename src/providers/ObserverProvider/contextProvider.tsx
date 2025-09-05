'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type SectionItem = {
  id: string
  element: HTMLElement
}

type SectionsContextType = {
  sections: SectionItem[]
  activeSection: string | null
}

const SectionsContext = createContext<SectionsContextType>({
  sections: [],
  activeSection: null,
})

export const useSections = () => useContext(SectionsContext)

type SectionsProviderProps = {
  children: ReactNode
}

export const SectionsProvider = ({ children }: SectionsProviderProps) => {
  const [sections, setSections] = useState<SectionItem[]>([])
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // собираем секции после монтирования
  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section]')
    )

    console.log(sectionElements)

    const sectionItems = sectionElements.map(el => ({
      id: el.dataset.section || '',
      element: el,
    }))

    setSections(sectionItems)
  }, [])

  // подключаем IntersectionObserver
  useEffect(() => {
    if (sections.length === 0) return

    const header: HTMLElement | null = document.querySelector('#header')
    const headerHeight = header ? header.offsetHeight : 0

    const observer = new IntersectionObserver(
      entries => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleSections.length > 0) {
          const section = sections.find(
            s => s.element === visibleSections[0].target
          )
          if (section) setActiveSection(section.id)
        }
      },
      {
        root: null,
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach(s => observer.observe(s.element))

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    if (!activeSection) return
    const event = new CustomEvent('activeSectionChange', {
      detail: activeSection,
    })
    document.dispatchEvent(event)
  }, [activeSection])

  return (
    <SectionsContext.Provider value={{ sections, activeSection }}>
      {children}
    </SectionsContext.Provider>
  )
}
