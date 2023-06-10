import React, { useEffect, useState } from 'react'

// components
import NavItem from '../NavItem/NavItem'

// css
import './sidebarFooter.css';

// mock 
const navList = [
  {id:'Settings', icon: 'ri-settings-line', navLabel: 'Settings', active: true},
  {id:'Help', icon: 'ri-question-fill', navLabel: 'Help', active: false},
  {id:'Logout', icon: 'ri-folder-shared-fill', navLabel: 'Logout', active: false}
]
const SidebarFooter = () => {
const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    setActiveNav(navList[0]?.id)
  }, [])
  
  const handleOnClick = (id) => {
    setActiveNav(id)
  }

  return (
    <div className='nav-footer'>
      {navList.map(item => <NavItem activeNav={activeNav} onClick={handleOnClick} {...item} />)}
    </div>
  )
}

export default SidebarFooter