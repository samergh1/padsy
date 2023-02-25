import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <NavBar/>
    <h1>HomePage</h1>
    </>
  )
}