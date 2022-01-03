import React from 'react'
import ButtonText from './buttons/button-text.component'
import Heading2 from './headings/heading2.component'

import photo1large from '../assets/images/nat-1-large.jpg'
import photo2large from '../assets/images/nat-2-large.jpg'
import photo3large from '../assets/images/nat-3-large.jpg'

import photo1 from '../assets/images/nat-1-large.jpg'
import photo2 from '../assets/images/nat-2-large.jpg'
import photo3 from '../assets/images/nat-3-large.jpg'

const About = () => {
  return (
    <section className='section-about'>
      <Heading2 className="u-center-text u-margin-bottom-huge">
        exciting tours for adventurous people
      </Heading2>

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
            <img
              srcSet={`${photo1} 300w, ${photo1large} 1000w`}
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              src={photo1large}
              alt="1"
              className="composition__photo composition__photo--ph-1" />
            
            <img
              srcSet={`${photo2} 300w, ${photo2large} 1000w`}
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              src={photo2large}
              alt="2"
              className="composition__photo composition__photo--ph-2" />
            
            <img
              srcSet={`${photo3} 300w, ${photo3large} 1000w`}
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              src={photo3large}
              alt="3"
              className="composition__photo composition__photo--ph-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
