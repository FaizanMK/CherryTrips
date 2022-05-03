import React from 'react'

function PicInfo({img,title,information}) {
  return (
    <div>
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{information}</p>
    </div>
  )
}

export default PicInfo