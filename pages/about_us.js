import React from 'react'
import Feedback_section from '../components/Feedback_section/Feedback_section';
import Footer from '../components/Footer/Footer'
import Header from '../components/header/header'
import HeroSection2 from '../components/HeroSection2/HeroSection2'
import Partner__section from '../components/Partner/Partner__section';
import Cta2 from './../components/cta2/cta2';

function About_us() {
  return (
    <div>
      <Header />
      <HeroSection2 />
      <Feedback_section />
      <Partner__section />
      <Cta2
        subTitle="So What is Next?"
        title="Are You Ready? Let's get to work!"
      />
      <Footer />
    </div>
  );
}

export default About_us