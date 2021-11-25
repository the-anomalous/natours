import React from 'react'
import ButtonGreen from './buttons/button-green.component'

const BookingForm = () => {
  return (
    <form action="#" className="form">
      <div className="form__group">
        <input type="text" className='form__input' placeholder='Full Name' id='name' required />
        <label className="form__label" htmlFor="name">Full Name</label>
      </div>

      <div className="form__group">
        <input type="email" className='form__input' placeholder='Email' id='email' required />
        <label className="form__label" htmlFor="email">Email</label>
      </div>

      <div className="form__group">
        <div className="form__radio-group">
          <input type="radio" name="size" id="small" className="form__radio-input" required />
          <label htmlFor="small" className="form__radio-label">
            <span className="form__radio-button" />
            Small tour group
          </label>
        </div>

        <div className="form__radio-group">
          <input type="radio" name="size" id="large" className="form__radio-input" required />
          <label htmlFor="large" className="form__radio-label">
            <span className="form__radio-button" />
            Large tour group
          </label>
        </div>
      </div>

      <div className="form__group">
        <ButtonGreen>Next Step</ButtonGreen>
      </div>
    </form>
  )
}

export default BookingForm
