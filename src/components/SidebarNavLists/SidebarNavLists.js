import React, { useState, useEffect } from 'react'

// components
import NavItem from '../NavItem';

// mock
const navList = [
  {id:'overview', icon: 'ri-home-8-line', navLabel: 'Overview', active: true},
  {id:'opportunities', icon: 'ri-home-8-line', navLabel: 'Opportunities', active: false},
  {id:'my_competitors', icon: 'ri-user-3-fill', navLabel: 'My competitors', active: false},
  {id:'briefs', icon: 'ri-file-3-fill', navLabel: 'Briefs', active: false},
  {id:'saved', icon: 'ri-bookmark-fill', navLabel: 'Saved', active: false},
]

const SidebarNavLists = () => {
  const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    setActiveNav(navList[0]?.id)
  }, [])
  
  const handleOnClick = (id) => {
    setActiveNav(id)
  }

  return (
    <div>
      {navList.map(navItem => (
        <NavItem activeNav={activeNav} onClick={handleOnClick} {...navItem} />
      ))}
    </div>
  )
}

export default SidebarNavLists