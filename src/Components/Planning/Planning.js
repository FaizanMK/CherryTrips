import React from 'react'
import './Planning.css';

function Planning() { 
  return (
    <div>
        <div className='Planning'>
        <div className="Planning-content">
        <h2 className='plan-text' > Where to?</h2>
        <div className="planning-bottom">
            <div className="dates ">
                <input type="date" />

                <div>--</div>

                <input type="date" />
            </div>

           <select name="dates" id="">
               <option value="monday">Monday</option>
           </select>

           <button className='planBtn' >Start Planning</button>


        </div>

        </div>
        
        </div>

        

    </div>
  )
}

export default Planning