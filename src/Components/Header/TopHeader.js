import React from 'react'
import { Link } from 'react-router-dom'
import './TopHeader.css'
import instaHead from'../../Assets/Images/instaHead.png';
import fbHead from'../../Assets/Images/fbHead.png';
function TopHeader() {
  return (
    <div className='black'>
        <div style={{display:'flex', padding:'10px', width:'100%', alignItems:'center'}} >
          <span style={{fontSize:'12px'}} >follow us:</span>
          <img className='space' width={20} height={20} src={instaHead} alt="" /> <img className='space' src={fbHead} width={20} height={20} alt="" /> 
        <h3 className='contact'>0992-1234567</h3>
        </div>
        
        <div className='btn_login'>
        <Link to='/Login'>Login</Link>
        </div>
    </div>
  )
}

export default TopHeader