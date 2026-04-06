'use client'
import Section from '@/components/layout/section'
import Photo from "@/features/about-me/components/photo"
import Metrics from "@/features/about-me/components/metrics"
import Bio from "@/features/about-me/components/bio"
import Title from "@/components/title"
import SubTitle from "@/components/subtitle"

const AboutMe = () => {
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

export default AboutMe
