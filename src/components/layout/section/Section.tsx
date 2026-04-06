'use client'
import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  isMain?: boolean
}

const Section = ({ children, isMain = false }: SectionProps) => {
  return (
    <div className={cn("container mx-auto relative flex w-full items-center justify-center", isMain ? "h-screen" : "h-[calc(100vh-60px)]")}>
      {children}
    </div>
  )
}

export default Section
