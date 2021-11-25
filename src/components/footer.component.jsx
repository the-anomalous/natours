/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LogoBig from '../assets/logos/logo-green-2x.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__logo-box">
        <img src={LogoBig} alt="Full Logo" className="footer__logo" />
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <nav className="footer__navigation">
            <ul className="list">
              <li className="list__item">
                <a href="#" className="list__link">company</a>
              </li>
              <li className="list__item">
                <a href="#" className="list__link">contact Us</a>
              </li>
              <li className="list__item">
                <a href="#" className="list__link">careers</a>
              </li>
              <li className="list__item">
                <a href="#" className="list__link">privacy policy</a>
              </li>
              <li className="list__item">
                <a href="#" className="list__link">terms</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-1-of-2">
          <div className="footer__copyright">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas non eaque ipsum excepturi delectus magni nam libero, corporis aut, itaque facilis iste deserunt laborum, quos doloribus molestiae labore omnis at cupiditate. Maiores eaque sed magnam perferendis voluptates repellendus ex!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
