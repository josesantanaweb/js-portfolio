import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import Header from './Header'

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string
    children: ReactNode
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ alt, ...props }: { alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...props} />
  },
}))

describe('Header', () => {
  it('renderiza logo, boton de menu y links de navegacion', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: 'Logo' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'menu' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'toggle theme' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skill' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Project' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })
})
