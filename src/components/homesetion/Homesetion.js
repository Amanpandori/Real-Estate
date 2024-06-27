import React from 'react'
import './Homesetion.css'
import spic1 from './sectionpic7.jpg'
import spic2 from './sectionpic1.jpg'
import spic3 from './sectionpic2.jpg'
import spic4 from './sectionpic3.jpg'
import spic5 from './sectionpic4.avif'
import spic6 from './sectionpic5.jpg'
import spic7 from './sectionpic6.jpeg'
import spic8 from './sectionpic8.webp'

const Homesetion = () => {
  return (
    <>
      <div className='home__section'>
        <div className='section__para'>
        <h1>Featured Neighborhoods</h1>
        <p>In the vibrant neighborhood of San Jose, California, Sam is renowned among residents, property developers, local businesses, and professionals in the real estate industry for her remarkable skills, dynamic approach, and tireless commitment to facilitating transactions for buyers and sellers.</p>
      </div>
      <div className='section__pics'>
        <div className='section__pic section__box'>
            <p className='section__para1'>Hillcrest</p>
            <img src={spic1} alt='something went wrong'></img>
        </div>
        <div className='section__pic'>
            <p>Downtown</p>
            <img src={spic2} alt='something went wrong'></img>
        </div>
        <div className='section__pic'>
            <p>Point Loma</p>
            <img src={spic3} alt='something went wrong'></img>
        </div>
        <div className='section__pic'>
            <p>San Diego</p>
            <img src={spic4} alt='something went wrong'></img>
        </div>
        <div className='section__pic'>
            <p>Clairemont</p>
            <img src={spic5} alt='something went wrong'></img>
        </div>
        <div className='section__pic'>
            <p className='section__para4'>Pacific Beach</p>
            <img src={spic6} alt='something went wrong'></img>
        </div>
        <div className='section__pic'>
            <p className='section__para3'>Miramar</p>
            <img src={spic7} alt='something went wrong'></img>
        </div>
        <div className='section__pic section__box'>
            <p className='section__para2'>Mission Beach</p>
            <img src={spic8} alt='something went wrong'></img>
        </div>

      </div>
        </div>
    </>
  )
}

export default Homesetion
