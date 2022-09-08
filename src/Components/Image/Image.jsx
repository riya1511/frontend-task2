import React, { useState } from 'react'
import { BsHeartFill } from 'react-icons/bs'

function Image({ source }) {

  const [liked, setLiked] = useState(false);

  const handleClick = () => setLiked(curr => !curr)

  return (
    <div className='image'>
        <img className='main-img' src={source} alt='main' />
        <div className={liked ? 'filled' : 'heart-icon'} onClick={handleClick}><BsHeartFill /></div>
    </div>
  )
}

export default Image