import React from 'react'
import './PicInfo.css'
function PicInfo({img,title,information}) {
  return (
    <div>
        <img src={img} alt="" />
        <p>{title}</p>

        <div className='information'>
    
        <p>{information}</p>
        
        </div>
    
    </div>
  )
}

export default PicInfo