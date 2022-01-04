import React from 'react'

const BackgroundVideo = () => {
  return (
    <div className='bg__video'>
      <video className='bg__video-content' autoPlay loop muted>
        <source src='https://ik.imagekit.io/ml22hal4lxj/videos/video-small_CMsjsdNUx1w.mp4?updatedAt=1641270197498'
          type='video/mp4' />
        <source src='https://ik.imagekit.io/ml22hal4lxj/videos/video-small_c5-u4qdBk.webm?updatedAt=1641270165128'
          type='video/webm' />
        Your browser is not supported!
      </video>
    </div>
  )
}

export default BackgroundVideo
