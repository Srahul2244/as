import React from 'react'

// img
import TeamLogo from '../../assest/header-left.svg';
import plus from '../../assest/plus-circle.svg';
import drop from '../../assest/dropdown.svg';

// css
import './headerLeft.css'

const HeaderLeft = () => {
  return (
    <div className='header-left'>
        <div className='team-logo-container'>
            <img src={TeamLogo} alt="team" />
        </div>
        <h6>Boro team</h6>
        <img className='mx-4 w-4 bg-[#F6F6FB] rounded-s' src={drop} alt='DropDown'/>
        <img src={plus} alt='plus'/>
    </div>
  )
}

export default HeaderLeft