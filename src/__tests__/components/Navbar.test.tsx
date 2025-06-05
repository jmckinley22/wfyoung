import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByText('W.F. Young')).toBeInTheDocument()
    expect(screen.getAllByText('Equine')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Pet Care')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar />)
    
    const hamburger = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(hamburger)
    
    // Check if mobile menu is visible
    const mobileMenu = screen.getByRole('navigation')
    expect(mobileMenu).toBeVisible()
  })
}) 