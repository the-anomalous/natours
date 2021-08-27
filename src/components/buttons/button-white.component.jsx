import React from 'react'

const ButtonWhite = ({ children, className }) => {
  return (
    <button className={`btn btn--white ${className}`}>{children}</button>
  )
}

export default ButtonWhite
