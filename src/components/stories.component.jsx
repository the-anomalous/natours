import React from 'react'

import StoryCard from './cards/story-card.component'
import ButtonText from './buttons/button-text.component'
import BackgroundVideo from './bg-video.component'
import Heading2 from './headings/heading2.component'

const Stories = () => {
  return (
    <section className='section-stories'>
      <BackgroundVideo/>

      <Heading2 className="u-center-text u-margin-bottom-huge">
        we make people genuinely happy
      </Heading2>

      <StoryCard
        img='https://ik.imagekit.io/ml22hal4lxj/images/nat-8_tfIE5UGxw.jpg?updatedAt=1641269873258'
        caption='Mary Smith'>
        <div className="story__text">
          <h3 className="heading-tertiary">
            I had the best ever week ith my family
          </h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vero dolore nisi. Impedit voluptates minus odit, accusantium possimus eos amet? Consectetur laudantium nulla iste perferendis quam omnis provident cupiditate fugit qui possimus nemo voluptatibus veniam eius voluptatem, ipsa exercitationem?
          </p>
        </div>
      </StoryCard>

      <StoryCard
        img='https://ik.imagekit.io/ml22hal4lxj/images/nat-9_-t1WNVdLThrh.jpg?updatedAt=1641269876577'
        caption='Jason Wilson'>
        <div className="story__text">
          <h3 className="heading-tertiary">
            Wow! My life is completely different now
          </h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa vero dolore nisi. Impedit voluptates minus odit, accusantium possimus eos amet? Consectetur laudantium nulla iste perferendis quam omnis provident cupiditate fugit qui possimus nemo voluptatibus veniam eius voluptatem, ipsa exercitationem?
          </p>
        </div>
      </StoryCard>

      <div className="u-center-text">
        <ButtonText>Read all stories</ButtonText>
      </div>
    </section>
  )
}

export default Stories
