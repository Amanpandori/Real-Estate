import React from 'react'
import './Properties.css'

const Properties = () => {
  return (
    <>
     <div className='p__main'>
      <img src='https://lifencolors.in/cdn/shop/files/green-living-room-wallpaper.jpg?v=1706098026&width=1500' alt='something went wrong'></img>
      <h1 className='p__main__heading'>Top Real Estate
      Listings in San Jose</h1>
      <form className='p__form'>
        <div className='form__center'>
          <input type='text' className='p__input input1' placeholder='Enter yor Address,state,city,area pin code' ></input>
          <select className='p__dropdown'>
            <option>Commercial</option>  
            <option>Multi Family Houses</option>
            <option>Houses</option>
          </select>
          <select className='p__dropdown'>
            <option>Propert Status</option>
            <option>Active</option>
            <option>Open House</option>
            <option>Sold</option>
          </select>
        </div>
        <div className='form__center'>
          <input type='text' className='p__input input' placeholder="Enter Beds and Bathrooms"></input>
          <input type='text' className='p__input' placeholder='MLS#'></input>
          <select className='p__dropdown'>
            <option>Price Select</option>
            <option>5000$-10000$</option>
            <option>10000$-50000$</option>
          </select>
          <button className='p__btn'>Search Properties</button>
        </div>
      </form>
      </div> 
      
    </>
  )
}

export default Properties;
