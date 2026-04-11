'use client'

interface SubTitleProps {
  text: string
}

export const SubTitle = ({ text }: SubTitleProps) => {
  return (
    <div className="flex gap-3 items-center">
      <span className="bg-primary h-px w-12 block" />
      <p className="text-primary text-xs font-semibold uppercase">{text}</p>
    </div>
  )
}
