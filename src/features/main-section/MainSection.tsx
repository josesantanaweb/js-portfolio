'use client'
import CodeBox from '@/features/main-section/components/code-box'
import MainInfo from '@/features/main-section/components/main-info'

const MainSection = () => {
  return (
    <div className="container mx-auto flex h-screen w-full items-center justify-center">
      <MainInfo />
      <CodeBox />
    </div>
  )
}

export default MainSection
