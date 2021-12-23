import React from 'react'
import Nat8 from '../assets/images/nat-8.jpg'
import Nat9 from '../assets/images/nat-9.jpg'
import Heading2 from './headings/heading2.component'
import BtnGreen from './buttons/button-green.component'

const Popup = () => {
  return (
    <div className='popup' id='popup'>
      <div className="popup__content">
        <div className="popup__right">
          <div className="popup__img_container--1">
            <img src={Nat8} alt="tour img" className='popup__img' />
          </div>
          <div className="popup__img_container--2">
            <img src={Nat9} alt="tour img" className='popup__img' />
          </div>
        </div>

        <div className="popup__left">
          <Heading2 className='u-margin-bottom-small' >
            Start Booking Now
          </Heading2>

          <h3 className='heading-tertiary u-margin-bottom-small'>
            important &ndash; please read this before booking
          </h3>

          <div className="popup__text u-margin-bottom-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda accusantium, doloremque odit, ea ab beatae amet, alias iusto exercitationem asperiores necessitatibus voluptas error laboriosam. Impedit eaque at eius ipsa quaerat ipsam reiciendis a praesentium, vero inventore rerum fuga id nesciunt natus sequi debitis culpa accusantium ducimus dicta cumque consequatur explicabo velit illo? Ut, officiis unde quisquam officia quasi minima distinctio dolorum beatae est commodi doloribus sapiente consectetur culpa quod! Facere laudantium tempore nisi repudiandae accusantium officia veritatis quibusdam consequuntur eveniet.
          </div>

          <a href="#section-book" className="popup__section_link">
            <BtnGreen> Book Now </BtnGreen>
          </a>
        </div>
        <a href="#section-tours" className='popup__close'>&times;</a>
      </div>
    </div>
  )
}

export default Popup
