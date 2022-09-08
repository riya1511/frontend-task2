import React from 'react';
import "../Category/Category.css"
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div className='categories'>
        <div className='items'>
            <ul>
                <li><NavLink to='/'>All photos</NavLink></li>
                <li><NavLink to='/arch'>💰Architecture</NavLink></li>
                <li><NavLink to='/kash'>🏔 Kashmir</NavLink></li>
                <li><NavLink to='/sea'>⛵️ Seaside</NavLink></li>
                <li><NavLink to='/lake'>🐟 Lake view</NavLink></li>
                <li><NavLink to='/italy'>🇮🇹 Italy</NavLink></li>
                <li><NavLink to='/china'>🇨🇳 China</NavLink></li>
                <li><NavLink to='/argentina'>🇦🇷Argentina</NavLink></li>
            </ul>
        </div>

        <div className='category-btn'>
            + New Category 
        </div>
    </div>
  )
}

export default Category