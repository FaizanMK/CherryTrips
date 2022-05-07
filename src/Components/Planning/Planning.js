import React from 'react'
import { Link } from 'react-router-dom';
import './Planning.css';

function Planning({startDate, setStartDate, endDate, setEndDate}) { 
  return (
    <div>
        <div className='Planning'>
        <div className="Planning-content">
        <h2 className='plan-text' > Where to?</h2>
        <div className="planning-bottom">
            <div className="dates ">
                <input type="date" value={startDate} onChange={(e)=> setStartDate(e.target.value)} />

                <div>--</div>

                <input type="date" value={endDate} onChange={(e)=> setEndDate(e.target.value)} />
            </div>

           <select name="dates" id="">
               <option placeholder='Guests' value="guests">Guests</option>
               <option  value="children">Children</option>
               <option  value="Adults">Adults</option>
               <option  value="Infants">Infants</option>

           </select>

           <Link to={'/confirm-tour'} >
           <button className='planBtn' >Start Planning</button>
           </Link>


        </div>

        </div>
        
        </div>

        

    </div>
  )
}

export default Planning