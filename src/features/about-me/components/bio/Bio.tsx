'use client'

const Bio = () => {
  return (
    <div className="flex flex-col p-6 border-stroke border rounded-2xl relative bg-surface">
      <span className="absolute top-10 left-0 w-1 h-15 bg-muted" style={{
        backgroundImage:
          'linear-gradient(to bottom, var(--primary-gradient-from), var(--primary-gradient-to))',
      }} />
      <p className='text-muted text-lg italic leading-10'>I&#39;m a passionate full-stack developer with expertise in building scalable web applications. I specialize in React, Next.js, and Node.js ecosystems, delivering clean code and exceptional user experiences. With a keen eye for detail and a love for elegant solutions, I transform complex problems into simple, beautiful, and intuitive designs.
      </p>
    </div>
  )
}

export default Bio
