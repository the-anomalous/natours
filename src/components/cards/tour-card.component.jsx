import React from 'react'

const TourCard = ({children}) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        {children}
      </div>
    </div>
  )
}

export default TourCard