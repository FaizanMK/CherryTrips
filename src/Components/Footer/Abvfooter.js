import React from 'react'
import './Abvfooter.css';
import suitcase from '../../Assets/Images/suitcase.png'
import star from '../../Assets/Images/star.png'
function Abvfooter() {
  return (
    <div className='parent'>
        <div className='suitcase'>

                <img src={suitcase} alt="" />
        </div>

        <div className='info'>
            <h1>OUR TOP REVIEWS</h1>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>KUMRAT VALLEY</p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae eligendi nesciunt fuga doloribus. Aspernatur magni numquam saepe labore perspiciatis nulla et sed eaque rem nobis iusto in tempora, incidunt excepturi!

            <div className='cherry'>
               <h1>Cherry Trips</h1> 
            </div>

        </div>


    </div>
  )
}

export default Abvfooter