'use client'

interface SubTitleProps {
  text: string
}

const SubTitle = ({ text }: SubTitleProps) => {
  return (
    <div className="flex gap-3 items-center">
      <span className="bg-muted h-px w-12 block" />
      <p className="text-muted text-xs font-semibold uppercase">{text}</p>
    </div>
  )
}

export default SubTitle
