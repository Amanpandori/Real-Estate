import React from 'react'
import './Header.css'
import video from './headervideo.mp4'

const Header = () => {
  return (
    <>
      <div className='header__video'>
          <video src={video} autoPlay loop muted></video>
          <div className='header__para'>
            <h1>Top Real Estate
            Listings in San Jose</h1>
          </div>
      </div>
    </>
  )
}

export default Header
