import React from 'react'
import { Link } from 'react-router-dom';
import TopHeader from '../../Components/Header/TopHeader';
import './TourConfirmation.css';

function TourConfirmation({startDate, setStartDate, endDate, setEndDate}) {
  return (
    <div>
      <TopHeader/>
      <div className='bg'>
        <h2>Duration for you cities</h2>
        <h3>Start Date:{startDate} - End Date:{endDate}</h3>
        
        <div className="confirm_Card">
          
        <h2>RawalPindi, Pakistan</h2>
        <h3>I am coming from this city. Start Date: {startDate}</h3>
        </div>
        <Link to='/ToPayment'>
        <button className='next_confirmbtn'>Next</button>
        </Link>
      </div>

      


      {/* <h1>TourConfirmation start date: {startDate}</h1>
      <h1>Tour confirmation end date:{endDate}</h1>  */}
      </div>
  )
}

export default TourConfirmation