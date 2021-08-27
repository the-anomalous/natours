import React from 'react'

const TestimonyCard = ({image, caption, children}) => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={image} alt={`${caption} testimony`} className='story__image' />
          <figcaption className='story__caption'>
            {caption}
          </figcaption>
        </figure>

        {children}
      </div>
    </div>

  )
}

export default TestimonyCard
