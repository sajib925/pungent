import React from 'react'
import HeroSection2 from '../components/HeroSection2/HeroSection2';
import Header from './../components/header/header';
import Footer from './../components/Footer/Footer';
import OurServices from './../components/OurServices/OurServices';
import Cta2 from '../components/cta2/cta2';

function Services() {
  return (
    <div>
      <Header />
      <HeroSection2 />
      <OurServices />
      <Cta2 />
      <Footer />
    </div>
  )
}

export default Services