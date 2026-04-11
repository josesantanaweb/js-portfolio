'use client'
import { Menu } from '@boxicons/react'
import { ToggleTheme, Logo } from '@/components/common'

const LINKS = [
  { hash: 'about', label: 'About' },
  { hash: 'experience', label: 'Experience' },
  { hash: 'skills', label: 'Skills' },
  { hash: 'projects', label: 'Projects' },
  { hash: 'blog', label: 'Blog' },
  { hash: 'contact', label: 'Contact' },
] as const

export const Header = () => {
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
          {LINKS.map((link) => (
            <a
              key={link.hash}
              href={`#${link.hash}`}
              className="text-ink hover:text-primary flex h-full items-center text-[1rem] transition-all"
            >
              {link.label}
            </a>
          ))}
          <ToggleTheme />
        </nav>
      </div>
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(79_79_79/10%)_1px,transparent_1px),linear-gradient(to_bottom,rgb(79_79_79/10%)_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>
    </header>
  )
}
