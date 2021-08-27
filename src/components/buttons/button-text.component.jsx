import React from 'react'

const ButtonText = ({children}) => {
  return (
    <button className='btn btn-text' >
      {children} &rarr;
    </button>
  )
}

export default ButtonText
