import React from 'react'

import TestimonyCard from './cards/testimony-card.component'
import ButtonText from './buttons/button-text.component'
import BackgroundVideo from './bg-video.component'

import Image8 from '../assets/images/nat-8.jpg'
import Image9 from '../assets/images/nat-9.jpg'

const Stories = () => {
  return (
    <section className='section-stories'>
      <BackgroundVideo/>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          we make people genuinely happy
        </h2>
      </div>

      <TestimonyCard image={Image8} caption='Mary Smith'>
        <div className="story__text">
          <h3 className="heading-tertiary">
            I had the best ever week ith my family
          </h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vero dolore nisi. Impedit voluptates minus odit, accusantium possimus eos amet? Consectetur laudantium nulla iste perferendis quam omnis provident cupiditate fugit qui possimus nemo voluptatibus veniam eius voluptatem, ipsa exercitationem?
          </p>
        </div>
      </TestimonyCard>

      <TestimonyCard image={Image9} caption='Jason Wilson'>
        <div className="story__text">
          <h3 className="heading-tertiary">
            Wow! My life is completely different now
          </h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vero dolore nisi. Impedit voluptates minus odit, accusantium possimus eos amet? Consectetur laudantium nulla iste perferendis quam omnis provident cupiditate fugit qui possimus nemo voluptatibus veniam eius voluptatem, ipsa exercitationem?
          </p>
        </div>
      </TestimonyCard>

      <div className="u-center-text">
        <ButtonText>Read all stories</ButtonText>
      </div>
    </section>
  )
}

export default Stories
