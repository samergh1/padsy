import { NavBar } from './components/NavBar'
import { Body } from './components/Body'
import { Features } from './components/Features'
import { Doctors } from './components/Doctors'

export function LandingPage() {
  return (
    <>
      <NavBar />
      <Body />
      <Features />
      <Doctors />
      <h1>HomePage</h1>
    </>
  )
}