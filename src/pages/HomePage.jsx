import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import EarnMoney from '../components/earn/EarnMoney'
import Services from '../components/servicees/Services'
import Cities from '../components/cities/Cities'
import Propos from '../components/propos/Propos'

const HomePage = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Hero />
        <EarnMoney />
        <Services />
        <Cities />
        <Propos />
    </div>
  )
}

export default HomePage