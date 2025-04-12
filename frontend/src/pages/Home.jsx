import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div>
      <ParticlesBackground/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
    </div>
  )
}

export default Home