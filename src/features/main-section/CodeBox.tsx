'use client'

export const CodeBox = () => {

  const developer = {
    fullName: 'Jose Santana',
    role: 'Fullstack Developer',
    skills: ['NextJS', 'Nest', 'Graphql'],
    experience: '10+ years',
    location: 'Venezuela, Valencia',
  }

  const lines = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
  ]

  return (
    <div className="bg-background border-stroke flex w-1/2 overflow-hidden rounded-2xl border flex-col">
      <div className="bg-surface flex h-14 w-full justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="bg-error h-3 w-3 rounded-full" />
          <span className="bg-warning h-3 w-3 rounded-full" />
          <span className="bg-success h-3 w-3 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-500" />
          <p className="text-muted font-mono text-sm font-semibold">
            Portfolio.tsx
          </p>
        </div>
      </div>
      <div className="flex h-full w-full p-6 gap-6">
        <div className="flex h-full flex-col gap-4">
          {lines.map((line) => (
            <p className="text-muted font-mono text-sm" key={line}>{line}</p>
          ))}
        </div>
        <div className="flex h-full flex-col gap-4">
          <p className="text-muted font-mono text-sm"><span className="text-pink-500 font-semibold">const</span> developer = {`{`}</p>
          <p className="text-muted font-mono text-sm pl-6">fullName: <span className="text-yellow-500">&#39;{developer.fullName}&rsquo;</span>,</p>
          <p className="text-muted font-mono text-sm pl-6">role: <span className="text-yellow-500">&#39;{developer.role}&rsquo;</span>,</p>
          <p className="text-muted font-mono text-sm pl-6">skill: [<span className="text-yellow-500">&#39;{developer.skills.join(', ')}&rsquo;</span>],</p>
          <p className="text-muted font-mono text-sm pl-6">experience: <span className="text-yellow-500">&#39;{developer.experience}&rsquo;</span>,</p>
          <p className="text-muted font-mono text-sm pl-6">location: <span className="text-yellow-500">&#39;{developer.location}&rsquo;</span>,</p>
          <p className="text-muted font-mono text-sm">{`}`};</p>
          <p className="text-muted font-mono text-sm"></p>
          <p className="text-muted font-mono text-sm"></p>
          <p className="text-muted font-mono text-sm"><span className="text-pink-500 font-semibold">developer</span>.showcase();</p>
        </div>
      </div>
    </div>
  )
}

