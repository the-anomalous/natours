import React from 'react'
import Video1 from '../assets/videos/video.mp4'
import Video2 from '../assets/videos/video.webm'

const BackgroundVideo = () => {
  return (
    <div className='bg__video'>
      <video className='bg__video-content' autoPlay loop muted>
        <source src={Video1} type='video/mp4' />
        <source src={Video2} type='video/webm' />
        Your browser is not supported!
      </video>
    </div>
  )
}

export default BackgroundVideo
