import React from 'react'
import Header from '../components/header.component'
import About from '../components/about.component'
import Features from '../components/features.component'

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features/>
      </main>
    </>
  )
}

export default HomePage
