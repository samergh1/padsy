import { NavBar } from './components/NavBar'
import { Body } from './components/Body'
import { Features } from './components/Features'
import { Doctors } from './components/Doctors'
import { Pages } from './components/Pages'

export function LandingPage() {
  return (
    <>
      <h1>HomePage</h1>
      <NavBar />
      <Body />
      {/* <Features />
      <Doctors />
      <Pages /> */}
    </>
  )
}