'use client'

export const Metrics = () => {
  return (
    <div className="flex items-center">
    <div className="flex items-start justify-start flex-col">
      <h5 className="text-inverse text-4xl font-black">+2</h5>
      <p className="text-sm text-muted uppercase">years of experience</p>
    </div>
    <span className="h-15 w-px bg-stroke mx-12" />
    <div className="flex items-start justify-start flex-col">
      <h5 className="text-inverse text-4xl font-black">+10</h5>
      <p className="text-sm text-muted uppercase">projects</p>
    </div>
    <span className="h-15 w-px bg-stroke mx-12" />
    <div className="flex items-start justify-start flex-col">
      <h5 className="text-inverse text-4xl font-black">+20</h5>
      <p className="text-sm text-muted uppercase">happy clients</p>
    </div>
  </div>
  )
}
