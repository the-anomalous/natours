import React from 'react'
import ButtonText from './buttons/button-text.component'
import Heading2 from './headings/heading2.component'

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
              srcSet='https://ik.imagekit.io/ml22hal4lxj/images/nat-1_z29l-oX57.jpg?updatedAt=1641269855705 300w, 
              https://ik.imagekit.io/ml22hal4lxj/images/nat-1-large_XjkorTOmu.jpg?updatedAt=1641269880826 1000w'
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              src='https://ik.imagekit.io/ml22hal4lxj/images/nat-1-large_XjkorTOmu.jpg?updatedAt=1641269880826'
              alt="1"
              className="composition__photo composition__photo--ph-1" />
            
            <img
              srcSet='https://ik.imagekit.io/ml22hal4lxj/images/nat-2_a_9xIwhT5.jpg?updatedAt=1641269961543 300w,
              https://ik.imagekit.io/ml22hal4lxj/images/nat-2-large_Z0GhBTnEA.jpg?updatedAt=1641269864505 1000w'
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              src='https://ik.imagekit.io/ml22hal4lxj/images/nat-2-large_Z0GhBTnEA.jpg?updatedAt=1641269864505'
              alt="2"
              className="composition__photo composition__photo--ph-2" />
            
            <img
              srcSet='https://ik.imagekit.io/ml22hal4lxj/images/nat-3_UBTBITZWk.jpg?updatedAt=1641269855461 300w,
              https://ik.imagekit.io/ml22hal4lxj/images/nat-3-large_LmVoY2AnpLIo.jpg?updatedAt=1641269878778 1000w'
              sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
              src='https://ik.imagekit.io/ml22hal4lxj/images/nat-3-large_LmVoY2AnpLIo.jpg?updatedAt=1641269878778'
              alt="3"
              className="composition__photo composition__photo--ph-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
