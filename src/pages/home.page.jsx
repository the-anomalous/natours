import React from 'react'
import Header from '../components/header.component'
import About from '../components/about.component'
import Features from '../components/features.component'
import Tours from '../components/tours.component'
import Stories from '../components/stories.component'
import Booking from '../components/booking.component'
import Footer from '../components/footer.component'
import Navigation from '../components/navigation.component'

const HomePage = () => {
  return (
    <>
      <Navigation/>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking/>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage
