'use client'
import { Section } from '@/components/layout'
import { CodeBox, MainInfo, ScrollDown, Socials } from '@/features/main-section'

export const MainSection = () => {
  return (
    <Section isMain>
      <MainInfo />
      <CodeBox />
      <ScrollDown />
      <Socials />
    </Section>
  )
}
