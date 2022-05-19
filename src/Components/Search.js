import React from 'react'
import './Search.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
function Search() {
  return (
    <div className='search'>
      <SearchSharpIcon />
      <input className='search_input' type="text" id="myInput" placeholder="Search " title="Type in a name"></input>
    
    </div>
  )
}

export default Search