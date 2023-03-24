import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";
import { Values } from "./components/Values";
import { Contact } from "./components/Contact";
import { Mission } from "./components/Mission";
import { Doctors } from "./components/Doctors";

export function LandingPage() {
  return (
    <>
      {/* <h1>HomePage</h1> */}
      <NavBar />
      <Body />
      <Values />
      <Doctors />
      <Mission />
      <Contact />
    </>
  );
}
