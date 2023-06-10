import React from 'react'

// css 
import './navItem.css';

const NavItem = (props) => {
    const { id, navLabel, icon, activeNav, onClick } = props;

  return (
    <div onClick={() => onClick(id)} className={`nav-item ${activeNav === id ? 'active': ''}`}>
        <div className='icon'>
            <i className={icon}></i>
        </div>
        <p>{navLabel}</p>
    </div>
  )
}

export default NavItem