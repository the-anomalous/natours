import React from 'react'
import LogoWhite from '../assets/logos/logo-white.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src={LogoWhite} alt="logo" className='logo' />
      </div>
      <div className="text-box">
        <h1 className="heading-box">
          <span className='heading-main'>outdoors</span>
          <span className='heading-sub'>is where life happens</span>
        </h1>
        <button className="btn btn-white">discover our tours</button>
      </div>
    </header>
  )
}

export default Header
