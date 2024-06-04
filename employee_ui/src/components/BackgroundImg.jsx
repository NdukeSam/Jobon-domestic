import React from 'react'
import backgroundImage from '../assets/bg.png';


const BackgroundImg = () => {
  return (
    <div className=" relative w-full bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      
    </div>
  )
}

export default BackgroundImg
