import React from "react";
import {
  img1,
  img2,
  img3,
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
import Image from "../Image/Image";
import "../Main/Main.css";
import { BsHeart } from "react-icons/bs";

function Main() {
  return (
    <div className="main">
      <div className='section'>
            <div className='text'>
                <h2>Today</h2>
                <p>Friday, 26 August 2022</p>
            </div>
            <div className='img'>
                <Image source={img1} />
                <Image source={img2} />
                <Image source={img3} />
                <Image source={img4} />
                <Image source={img5} />
                <Image source={img6} />
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
                <Image source={img9} />
                <Image source={img10} />
                <Image source={img11} />
                <Image source={img12} />
                <Image source={img13} />
                <Image source={img14} />
                <Image source={img15} />
                <Image source={img16} />
            </div>
        </div>
     
    </div>
  );
}

export default Main;
