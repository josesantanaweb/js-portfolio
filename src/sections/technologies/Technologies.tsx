'use client'
import { useState } from 'react'
import { Section } from '@/components/layout'
import { SubTitle, Title } from "@/components/common"
import { Tabs } from './Tabs'
import Image from 'next/image'

type TechnologyCategory = 'frontend' | 'backend'

const TECHNOLOGIES = [
  {
    name: 'React',
    image: '/images/technologies/react.svg',
    category: 'frontend',
  },
  {
    name: 'Next',
    image: '/images/technologies/next.svg',
    category: 'frontend',
  },
  {
    name: 'Vue',
    image: '/images/technologies/vue.svg',
    category: 'frontend',
  },
  {
    name: 'Javascript',
    image: '/images/technologies/javascript.svg',
    category: 'frontend',
  },
  {
    name: 'Typescript',
    image: '/images/technologies/typescript.svg',
    category: 'frontend',
  },
  {
    name: 'HTML',
    image: '/images/technologies/html.svg',
    category: 'frontend',
  },
  {
    name: 'Framer',
    image: '/images/technologies/framer.svg',
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    image: '/images/technologies/tailwind.svg',
    category: 'frontend',
  },
  {
    name: 'Nest',
    image: '/images/technologies/nest.svg',
    category: 'backend',
  },
 ] as const

export const Technologies = () => {
  const [activeTab, setActiveTab] = useState<TechnologyCategory>('frontend')

  const filteredTechnologies = TECHNOLOGIES.filter(
    (technology) => technology.category === activeTab,
  )

  return (
    <Section id="technologies">
      <div className="flex items-center justify-center flex-col gap-15 w-full">
        <div className="flex flex-col gap-8">
          <SubTitle text="Tech Stack" />
          <Title text="Technolo" highlight="gies" />
        </div>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="grid grid-cols-4 justify-center w-full gap-8 max-w-3xl transition-all duration-300">
          {filteredTechnologies.map((technology) => (
            <div key={technology.name} className="flex items-center flex-col gap-3 justify-center border border-stroke rounded-2xl p-4 w-full h-[144px]">
            <Image src={technology.image} alt={technology.name} width={100} height={100} className="h-12 w-12 brightness-0 invert transition-transform duration-300 hover:rotate-[8deg] hover:scale-115" />
              <h4 className="text-base font-semibold text-white">{technology.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
