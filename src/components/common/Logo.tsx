'use client'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
}

export const Logo = ({ variant = 'dark' }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={
          variant === 'dark'
            ? '/images/logo-dark.svg'
            : '/images/logo-light.svg'
        }
        alt="Logo"
        width={100}
        height={100}
        className="h-6 w-12"
      />
    </Link>
  )
}
