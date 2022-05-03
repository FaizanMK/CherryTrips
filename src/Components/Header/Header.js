import React from 'react'
import Cart from '../Cart'
import Search from '../Search'
import Buttons from '../Buttons/Buttons'
import Logo from '../Logo'
import './Header.css'; 

function Header() {
  return (
    <div className='header'>
    <Logo  />
    <Search/>
    <Buttons/>
    <Cart/>    
    
    </div>
  
  
  )
}

export default Header