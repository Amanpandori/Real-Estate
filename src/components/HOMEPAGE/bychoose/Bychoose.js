import React from 'react'
import './Bychoose.css'
import byvideo from './choosevideo.mp4'

const Bychoose = () => {
  return (
    <>
      <div className='main__choose'>
        <div className='choose__title'>
            <h2>Why Choose Us</h2>
            <p>When it comes to selecting a real estate partner, why choose us? Because we offer more than just transactions – we provide personalized experiences tailored to your unique needs and preferences. We go above and beyond to ensure your satisfaction every step of the way. </p>
            <div className='choose__experience'>
                <div>
                    <h3>20+ Years</h3>
                    <p>Of Real Estate Experience</p>
                </div>
                <div>
                    <h3>2012-2024</h3>
                    <p>Realtors®️ Sales Award</p>
                </div>
            </div>
        </div>
        <div className='choose__video'>
            <video src={byvideo} autoPlay loop controls ></video>
        </div>
      </div>
    </>
  )
}

export default Bychoose;
