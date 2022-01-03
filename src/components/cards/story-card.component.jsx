import React from 'react'

const StoryCard = ({ img, caption, children }) => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img
            src={img}
            alt={`${caption} testimony`}
            className='story__image' />
          <figcaption className='story__caption'>
            {caption}
          </figcaption>
        </figure>

        {children}
      </div>
    </div>

  )
}

export default StoryCard
