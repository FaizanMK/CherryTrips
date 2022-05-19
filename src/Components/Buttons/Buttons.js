import React from 'react'
import './Buttons.css';
import "@fontsource/metropolis"; // Defaults to weight 400.
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import Destination from '../../Pages/Destination/Destination';


function Buttons() {
  return (
    <div className='Buttons'>

        <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to='/' >HOME</Link>

        <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to='/Destination'> Destination</Link>

        <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to='/Tours'>TOURS</Link>
        {/* <a href="">DESTINATION</a> */}
        
        <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to='/Contact'>CONTACT</Link>    

        <Link style={{textDecoration:'none', color:'#FFFFFF'}}  to='/Cart'><ShoppingCartOutlinedIcon/> </Link> 
      </div>
  )
}

export default Buttons