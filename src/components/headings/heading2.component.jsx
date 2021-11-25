import React from 'react'

const Heading2 = ({className, children}) => {
  return (
    <div className={className}>
      <h2 className="heading-secondary">
        {children}
      </h2>
    </div>
  )
}

export default Heading2
