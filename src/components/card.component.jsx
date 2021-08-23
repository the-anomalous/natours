import React from 'react'

const Card = ({children}) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        {children}
      </div>
    </div>
  )
}

export default Card