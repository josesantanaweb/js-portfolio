'use client'
import Link from 'next/link'
import { Linkedin, Github,  Whatsapp } from '@boxicons/react'

const Socials = () => {
    return (
        <div
            className='absolute -left-20 bottom-5 flex flex-col items-center justify-center gap-6 py-2 w-10'
        >
          <Link href="/" className='text-muted text-lg cursor-pointer hover:text-white transition-all'>
            <Linkedin />
          </Link>
          <Link href="/" className='text-muted text-lg cursor-pointer hover:text-white transition-all'>
            <Github />
          </Link>
          <Link href="/" className='text-muted text-lg cursor-pointer hover:text-white transition-all'>
            <Whatsapp />
          </Link>
          <span className="block w-px h-22 bg-muted"/>
        </div>
    )
}

export default Socials
