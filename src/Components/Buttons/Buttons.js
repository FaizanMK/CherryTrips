import React from 'react'
import './Buttons.css';
import "@fontsource/metropolis"; // Defaults to weight 400.
import { Link } from 'react-router-dom';
// import Destination from '../../Pages/Destination/Destination';


function Buttons() {
  return (
    <div className='Buttons'>

        <Link style={{textDecoration: 'none', color: 'black'}} to='/' >HOME</Link>

        <Link to='/Destination'> Destination</Link>

        <Link to='/Tours'>TOURS</Link>
        {/* <a href="">DESTINATION</a> */}
        
        <Link to='/Contact'>CONTACT</Link>    

        <Link to='/Cart'> CART</Link> 
      </div>
  )
}

export default Buttons