import React from 'react'
import HeroSection from '../component/services/HeroSection'
import ServicesList from '../component/services/ServicesList'
import CTASection from '../component/about/CTASection'

const Services = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesList/>
      <CTASection/>
    </div>
  )
}

export default Services