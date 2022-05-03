import React from 'react'
import './TourCard.css'

function TourCard({imgUrl, title, price}) {
  return (
    <div className='card'>
    
    <div className='image_container'> 

    <img src={imgUrl} alt="" />        
    <h3>{title}</h3>
    <h2>{price}</h2>

        
            
     </div>

    </div>
  )
}

export default TourCard