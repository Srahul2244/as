import React from 'react'

// components
import SidebarHeader from '../SidebarHeader'
import SidebarFooter from '../SidebarFooter'
import SidebarNavLists from '../SidebarNavLists'

// css
import './sidebar.css';

const Sidebar = () => {
  return (
    <section className='sidebar__container'>
        <SidebarHeader />
        <SidebarNavLists />
        <SidebarFooter />
    </section>
  )
}

export default Sidebar