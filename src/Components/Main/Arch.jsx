import React from 'react'
import {
    img2,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  } from "../../Images/index";
import Category from '../Category/Category';
  import Image from "../Image/Image";
  import "../Main/Main.css";
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

function Arch() {
  return (
    <div>
        <Navbar />
        <Searchbar />
        <Category />
         <div className='main'>
            <div className='section'>
                <div className='text'>
                    <h2>Today</h2>
                    <p>Friday, 26 August 2022</p>
                </div>
                <div className='img'>
                    <Image source={img2} />
                    <Image source={img4} />
                    <Image source={img5} />
                </div>
            </div>
            <div className='section'>
                <div className='text'>
                    <h2>This Week</h2>
                    <p>21 to 25 August 2022</p>
                </div>
                <div className='img'>
                    <Image source={img7} />
                    <Image source={img8} />
                    <Image source={img14} />
                </div>
            </div>
        </div>
    </div>

   
  )
}

export default Arch