'use client'
import CodeBox from '@/features/main-section/components/code-box'
import MainInfo from '@/features/main-section/components/main-info'
import ScrollDown from '@/features/main-section/components/scroll-down'
import Socials from '@/features/main-section/components/socials'

const MainSection = () => {
  return (
    <div className="container mx-auto relative flex h-[calc(100vh-60px)] w-full items-center justify-center">
      <MainInfo />
      <CodeBox />
      <ScrollDown />
      <Socials />
    </div>
  )
}

export default MainSection
