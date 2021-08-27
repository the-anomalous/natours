import React from 'react'

const ButtonGreen = ({ children, className }) => {
  return (
    <button className={`btn btn--green ${className}`}>{children}</button>
  )
}

export default ButtonGreen
