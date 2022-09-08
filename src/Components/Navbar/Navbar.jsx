import React, { useState } from 'react';
import bell from '../../Images/bell.png';
import cog from '../../Images/cog.png';
import "../Navbar/Navbar.css";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {

    const [value, setValue] = useState('Timeline');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

  return (
    <div className='navbar'>
        <div className='icons'>
            <img src={cog} alt='nav icon' />
            <img src={bell} alt='nav icon' />
        </div>

        <Dropdown />

        <div className='nav-menu'>
            <ul className='nav-list'>
                <li>Timeline</li>
                <li>Albums</li>
                <li>Events</li>
                <li>Favorites</li>
            </ul>
        </div>

        <div className='nav-btn'>
            <button><AiOutlinePlusCircle /> Upload photos</button>
        </div>
    </div>
  )
}

export default Navbar