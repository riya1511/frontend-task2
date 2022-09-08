import React from 'react'
import '../Dropdown/Dropdown.css'

function Dropdown() {
  return (
    <div className='dropdown'>
        <div className='dropdown-item'>Timeline</div>
        <div className='dropdown-item'>Albums</div>
        <div className='dropdown-item'>Events</div>
        <div className='dropdown-item'>Favorites</div>
    </div>
  )
}

export default Dropdown