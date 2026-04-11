'use client'
import Link from 'next/link'
import { Linkedin, Github, Whatsapp } from '@boxicons/react'

export const Socials = () => {
  return (
    <div
      className='fixed left-10 bottom-0 flex flex-col items-center justify-center gap-6 py-2 w-10'
    >
      <Link href="/" className='text-muted text-lg cursor-pointer transition-all hover:text-inverse'>
        <Linkedin />
      </Link>
      <Link href="/" className='text-muted text-lg cursor-pointer transition-all hover:text-inverse'>
        <Github />
      </Link>
      <Link href="/" className='text-muted text-lg cursor-pointer transition-all hover:text-inverse'>
        <Whatsapp />
      </Link>
      <span className="block w-px h-22 bg-muted" />
    </div>
  )
}
