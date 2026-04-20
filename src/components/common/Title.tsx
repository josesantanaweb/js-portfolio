'use client'

interface TitleProps {
  text: string
  highlight: string
  twoWords?: boolean
}

export const Title = ({ text, highlight, twoWords }: TitleProps) => {
  return (
    <h1 className="text-ink text-7xl font-black">
      {text}
      {twoWords ? ' ' : null}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--primary-gradient-from), var(--primary-gradient-to))',
        }}
      >
        {highlight}
      </span>
    </h1>
  )
}
