'use client'
import Link from 'next/link'
import { Menu } from '@boxicons/react'
import Logo from '@/components/logo'
import ToggleTheme from '@/components/toggle-theme'

const Header = () => {
  return (
    <header className="bg-canvas">
      <div className="container mx-auto flex h-15 items-center justify-between px-4">
        <Logo />
        <button
          className="text-ink block cursor-pointer text-2xl md:hidden"
          role="button"
          aria-label="menu"
        >
          <Menu />
        </button>
        <nav className="hidden h-full items-center gap-9 md:flex">
          <Link
            href="/"
            className="text-ink flex h-full items-center text-[1rem]"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-ink flex h-full items-center text-[1rem]"
          >
            Experience
          </Link>
          <Link
            href="/"
            className="text-ink flex h-full items-center text-[1rem]"
          >
            Skill
          </Link>
          <Link
            href="/"
            className="text-ink flex h-full items-center text-[1rem]"
          >
            Project
          </Link>
          <Link
            href="/"
            className="text-ink flex h-full items-center text-[1rem]"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-ink flex h-full items-center text-[1rem]"
          >
            Contact
          </Link>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  )
}

export default Header
