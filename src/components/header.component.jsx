import React from 'react'
import ButtonWhite from './buttons/button-white.component'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src='https://ik.imagekit.io/ml22hal4lxj/logos/logo-white_KudVzJ9J5Uln.png?updatedAt=1641270015270'
          alt="logo"
          className='header__logo' />
      </div>
      <div className="header__text-box">
        <h1 className="heading-box">
          <span className='heading-box--main'>outdoors</span>
          <span className='heading-box--sub'>is where life happens</span>
        </h1>
        <ButtonWhite className="btn--animated">discover our tours</ButtonWhite>
      </div>
    </header>
  )
}

export default Header
