import { NavBar } from './components/NavBar'
import { Body } from './components/Body'
import { Values } from './components/Values'
import { Doctors } from './components/Doctors'
import { Contact } from './components/Contact'
import { Mission } from './components/Mission'


export function LandingPage() {
  return (
    <>
      <NavBar />
      <Body />
      <Values />
      <Doctors />
      <Mission />
      <Contact/>
    </>
  )
}