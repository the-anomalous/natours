import React from 'react'
import ButtonText from './buttons/button-text.component'

import photo1 from '../assets/images/nat-1-large.jpg'
import photo2 from '../assets/images/nat-2-large.jpg'
import photo3 from '../assets/images/nat-3-large.jpg'

const About = () => {
  return (
    <section className='section-about'>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            you're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere in architecto placeat magni. Doloremque laudantium dolor autem! Nostrum in ad, quo ex ipsa soluta natus inventore fugit reiciendis eveniet.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            live adventures like you have never before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus officiis repellendus porro saepe eum quod, deleniti animi.
          </p>
          
          <ButtonText>Learn More</ButtonText>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={photo1} alt="1" className="composition__photo composition__photo--ph-1" />
            <img src={photo2} alt="2" className="composition__photo composition__photo--ph-2" />
            <img src={photo3} alt="3" className="composition__photo composition__photo--ph-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
