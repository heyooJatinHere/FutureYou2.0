import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HowItWorksSection from '../components/HowItWorksSection'

const Home = () => {
  return (
    <div>
      <ParticlesBackground/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <HowItWorksSection/>
    </div>
  )
}

export default Home