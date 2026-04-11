'use client'
import { Section } from '@/components/layout'
import { Metrics, Photo, Bio } from "@/features/about-me"
import { SubTitle, Title } from "@/components/common"

export const AboutMe = () => {
  return (
    <Section>
      <div className="flex items-center justify-center gap-10">
        <div className="flex w-1/2 flex-col gap-10">
          <div className="flex flex-col gap-8">
            <SubTitle text="Biography" />
            <Title text="About" highlight="Me" />
          </div>
          <Bio />
          <Metrics />
        </div>
        <Photo />
      </div>
    </Section>
  )
}
