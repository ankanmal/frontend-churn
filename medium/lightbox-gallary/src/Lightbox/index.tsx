import React, { useEffect, useState } from 'react';
import { images } from '../images';
import "./lightbox.css"
export default function Lightbox() {
  const[clickedImage,setClickedImage]= useState()

  const handleImages = (value)=>{
    setClickedImage(value)
  }
  return <div>
    <div className='gallary'>
      {images.map((value,index)=>(
      <div className='gallary-box'>
        <img src={value} alt={`image${index}`} className='gallary-images'  onClick={()=>handleImages(value)}/>
      </div>
      ))}
      {clickedImage && <Modal image={clickedImage} handleImages={handleImages}/>}
    </div>
  </div>;
}

const Modal = ({image,handleImages})=>{

  const handleClick=(e)=>{
    if(e.target.classList.contains('dismiss')) {
      handleImages(null)
    }

  }

  const handleImageSelection =(value)=>{
    handleImages(value)
  }
  return (
    <>
    <div className={`overlay dismiss ${image?'active':''}`} onClick={handleClick}>
      <img src={image} alt="image" className='modal-content dismiss'/>
      <div className="overlay-images dismiss">
        {images.map((value,index)=>(
          <img src={value} alt={`image-${index}`} key={index} onClick={()=>handleImageSelection(value)} className='overlay-mini-images'  />
        ))}
      </div>
    </div>

    </>
  )
}