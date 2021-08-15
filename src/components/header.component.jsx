import React from 'react'
import LogoWhite from '../assets/logos/logo-white.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src={LogoWhite} alt="logo" className='header__logo' />
      </div>
      <div className="header__text-box">
        <h1 className="heading-box">
          <span className='heading-box--main'>outdoors</span>
          <span className='heading-box--sub'>is where life happens</span>
        </h1>
        <button className="btn btn--white btn--animated">discover our tours</button>
      </div>
    </header>
  )
}

export default Header
