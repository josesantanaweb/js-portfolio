'use client'
import Section from '@/components/layout/section'
import CodeBox from '@/features/main-section/components/code-box'
import MainInfo from '@/features/main-section/components/main-info'
import ScrollDown from '@/features/main-section/components/scroll-down'
import Socials from '@/features/main-section/components/socials'

const MainSection = () => {
  return (
    <Section isMain>
      <MainInfo />
      <CodeBox />
      <ScrollDown />
      <Socials />
    </Section>
  )
}

export default MainSection
