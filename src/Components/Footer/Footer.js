import React from 'react'
import './Footer.css'
import instagram from '../../Assets/Images/instagram.png'

function Footer() {
  return (

    <div style={{display:'flex', flexDirection:'column', backgroundColor: 'black', paddingBottom:'2px', marginTop: '5%'  }} >
    <div className='footer_parent'>
    
    <div className='logo'>
    <h1>LOGO</h1>        
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae officia similique ipsa fuga, a commodi, perferendis rem iusto quasi maxime molestias eligendi earum corporis et, sapiente nobis animi dignissimos.</p>

    </div>

    <div className='home'>
        <h3>About us</h3>
        <h3> Destination</h3>
        <h3>Tours</h3>

    </div>

    <div className='contact'>
        <h3>0992-12345678</h3>
        <h3>abc@gmail.com</h3>
    </div>

    <div className='feed'>
    <h2>Instagram Feed</h2>

    <div className='insta_feed'>   
    <img src={instagram} alt="" />
    <img src={instagram} alt="" />
    <img src={instagram} alt="" />
   
    </div>

    <div className='insta_feed'>
    <img src={instagram} alt="" />
    <img src={instagram} alt="" />
    <img src={instagram} alt="" />
    </div>

    </div>
    
    </div>

    <div style={{height: '2px', width: '100%', backgroundColor: 'white'}} ></div>

    <div className='rights'>
        <h2 >All rights reserved</h2>
    </div>

    
    </div>
  )
}

export default Footer