import React from 'react'
import Heading2 from './headings/heading2.component'
import BookingForm from './booking-form.component'

const Booking = () => {
  return (
    <section className='section-book'>
      <div className="row">
        <div className="book">
          <div className="book__form">
            <Heading2 className="u-margin-bottom-normal">
              start booking now
            </Heading2>

            <BookingForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
