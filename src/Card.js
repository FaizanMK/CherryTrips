import React from 'react'
import './Card.css'
function Card({title, imageUrl}) {
  return (
    <div className='card'>
     <div className="image_container">
       <img src={imageUrl} alt="" />
       <h3>{title}</h3> 

     </div>
       

    </div>
  )
}

export default Card