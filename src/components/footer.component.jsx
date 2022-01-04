/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__logo-box">
        <picture className='footer__logo' >
          <source
            srcSet='https://ik.imagekit.io/ml22hal4lxj/logos/logo-green-small-1x_e2UooWnn7.png?updatedAt=1641270003450 1x, 
            https://ik.imagekit.io/ml22hal4lxj/logos/logo-green-small-2x_P1FZcZuqH.png?updatedAt=1641270003948 2x'
            media="(max-width:37.5em)" />
          <img
            srcSet='https://ik.imagekit.io/ml22hal4lxj/logos/logo-green-1x_rk37RcCfg7G9.png?updatedAt=1641270015227 1x,
          https://ik.imagekit.io/ml22hal4lxj/logos/logo-green-2x_tv3sb54YoR.png?updatedAt=1641270003135 2x'
            alt="Full Logo" />
        </picture>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <nav className="footer__navigation">
            <ul className="list">
              <li className="list__item">
                <a href="#company" className="list__link">company</a>
              </li>
              <li className="list__item">
                <a href="#contact-us" className="list__link">contact us</a>
              </li>
              <li className="list__item">
                <a href="#careers" className="list__link">careers</a>
              </li>
              <li className="list__item">
                <a href="#privacy-policy" className="list__link">privacy policy</a>
              </li>
              <li className="list__item">
                <a href="#terms" className="list__link">terms</a>
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
