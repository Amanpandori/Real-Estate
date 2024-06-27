import React from 'react'
import './About.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'

const About = () => {
  return (
    <>
      <div className="about__container">
      <h1>Passionate About Being Different</h1>
      <p>Sam stands out to all – clients, developers, vendors, and industry professionals alike – for her exceptional talents, innovative spirit, and unwavering dedication in guiding buyers and sellers from San Jose.  Backed by her extensive network, she consistently exceeds expectations.</p>
      </div>
      <div className='about__pics'>
        <div className='pic'>
            <p>HOME SEARCH</p>
            <img src={pic1}  alt='something went wrong'></img>

        </div>
        <div className='pic'>
        <p className='noset'>HOME VALUATION</p>
        <img src={pic2}  alt='something went wrong'></img>
        </div>
        <div className='pic'>
        <p>LET'S CONNECT</p>
        <img src={pic3}  alt='something went wrong'></img>
        </div>

      </div>
    </>
  )
}

export default About
