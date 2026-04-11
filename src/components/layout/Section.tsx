'use client'
import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  isMain?: boolean
  id?: string
  className?: string
}

export const Section = ({
  children,
  isMain = false,
  id,
  className,
}: SectionProps) => {
  return (
    <div
      id={id}
      className={cn(
        'container relative mx-auto flex w-full scroll-mt-16 items-center justify-center',
        isMain ? 'h-[calc(100vh-60px)]' : 'h-screen',
        className,
      )}
    >
      {children}
    </div>
  )
}
