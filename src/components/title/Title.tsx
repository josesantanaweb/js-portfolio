'use client'

interface TitleProps {
  text: string
  highlight: string
}

const Title = ({ text, highlight }: TitleProps) => {
  return (
    <h1 className="text-ink text-7xl font-black">
      {text}{' '}
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

export default Title
