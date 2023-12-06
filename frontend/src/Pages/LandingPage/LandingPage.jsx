import React from 'react'
import './LandingPage.css'
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
const LandingPage = () => {
  return (
    <div className='landing-page' >
          <Hero /> 
          <Features/>
    </div>
  )
}

export default LandingPage