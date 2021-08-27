import React from 'react'
import Header from '../components/header.component'
import About from '../components/about.component'
import Features from '../components/features.component'
import Tours from '../components/tours.component'
import Stories from '../components/stories.component'
import Booking from '../components/booking.component'

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking/>
      </main>
    </>
  )
}

export default HomePage
