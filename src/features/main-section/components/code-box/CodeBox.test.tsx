import { render, screen } from '@testing-library/react'
import CodeBox from './CodeBox'

describe('CodeBox', () => {
  it('muestra el titulo del archivo y el bloque de codigo del developer', () => {
    render(<CodeBox />)

    expect(screen.getByText('Portfolio.tsx')).toBeInTheDocument()

    expect(screen.getByText('const')).toBeInTheDocument()
    expect(screen.getByText(/Jose Santana/)).toBeInTheDocument()
    expect(screen.getByText(/Fullstack Developer/)).toBeInTheDocument()
    expect(screen.getByText(/10\+ years/)).toBeInTheDocument()
    expect(screen.getByText(/Venezuela, Valencia/)).toBeInTheDocument()
    expect(screen.getByText(/NextJS/)).toBeInTheDocument()

    expect(
      screen.getByText((_, el) => el?.textContent === 'developer.showcase();'),
    ).toBeInTheDocument()

    expect(screen.getByText(/skill:\s*\[/)).toBeInTheDocument()

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('09')).toBeInTheDocument()
  })
})
