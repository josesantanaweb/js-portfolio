'use client'
import { Section } from '@/components/layout'
import { CodeBox, MainInfo, ScrollDown, Socials } from '@/sections/main-section'

export const MainSection = () => {
  return (
    <Section id="home" isMain>
      <MainInfo />
      <CodeBox />
      <ScrollDown />
      <Socials />
    </Section>
  )
}
