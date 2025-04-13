import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HowItWorksSection from '../components/HowItWorksSection'
import QuizSection from '../components/QuizSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <ParticlesBackground/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <HowItWorksSection/>
      <QuizSection/>
      <Footer/>
    </div>
  )
}

export default Home