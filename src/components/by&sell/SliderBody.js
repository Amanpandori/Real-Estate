import React from 'react'
import SliderData from './SliderData';
import Buyerpage from './Buyerpage';

const SliderBody = () => {
  return (
    <>
   {SliderData.map((value)=>{
    return(
        <Buyerpage
          
        />
    )
   })}
    </>
  )
}

export default SliderBody;
