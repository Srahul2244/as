import React from 'react'

// asset
import SearchIcon from '../../assest/search.svg'

// css
import './sidebarHeader.css'

const SidebarHeader = () => {
  return (
    <div className='sidebar_header'>
      <div className='outer_circle'>
        <div className='inner_circle'></div>
        <img src={SearchIcon} alt="search" />
      </div>
      <h4>Concured</h4>
    </div>
  )
}

export default SidebarHeader