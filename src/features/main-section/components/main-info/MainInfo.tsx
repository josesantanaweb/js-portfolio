'use client'
import { ArrowInDownSquareHalf } from '@boxicons/react'
import TypingText from '@/components/typing-text'

const MainInfo = () => {
  return (
    <div className="flex w-1/2 flex-col gap-8">
        <div className="bg-surface border-stroke flex h-8 items-center gap-2 self-start rounded-full border px-3">
          <span className="bg-success h-2 w-2 rounded-full shadow-[0_0_6px_1px_rgba(24,235,182,0.6)]" />
          <p className="text-muted text-xs font-semibold uppercase">
            Available for projects - 2026
          </p>
        </div>
        <h1 className="text-ink text-7xl font-black">
          José{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, var(--name-gradient-from), var(--name-gradient-to))',
            }}
          >
            Santana
          </span>
        </h1>
        <p className="text-muted text-xl">
          I&apos;m <span className="text-ink font-semibold">José Santana</span>,
          a professional <TypingText />
          <br />
          Dedicated to building high-performance, user-centric web applications.
        </p>
        <div className="flex items-center gap-6">
          <button className="bg-ink text-canvas flex h-14 cursor-pointer items-center justify-center gap-3 rounded-full px-6 font-semibold uppercase">
            view my work
          </button>
          <button className="bg-surface border-stroke text-ink flex h-14 cursor-pointer items-center justify-center gap-3 rounded-full border px-6 font-semibold uppercase">
            get resume
            <ArrowInDownSquareHalf />
          </button>
        </div>
      </div>
  )
}

export default MainInfo
