import React from 'react'

// img
import Profile from '../../assest/profile.svg';
import drop from '../../assest/dropdown.svg';

// css
import './headerRight.css'

const HeaderRight = () => {
  return (
    <div className='header-right'>
        <img src={Profile} alr='profile' />
        <h6>Zahra hasht..</h6>
        <img className='mx-4 w-4 bg-[#F6F6FB] rounded-s' src={drop} alt='DropDown'/>
    </div>
  )
}

export default HeaderRight