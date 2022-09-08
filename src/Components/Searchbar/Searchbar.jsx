import React from 'react'
import { BsSearch } from 'react-icons/bs';
import '../Searchbar/Searchbar.css';
// import { InputAdornment } from '@mui/material';

function Searchbar() {
  return (
    <div className='searchbar'>
        <div className='heading'>
            <h1>Library</h1>
        </div>
        <div className='search'>
            <input placeholder='Search all photos' />
            <div className='search-icon'><BsSearch /></div>
        </div>
    </div>
  )
}

export default Searchbar