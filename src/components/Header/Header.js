import React from 'react'

// components
import HeaderLeft from '../HeaderLeft'
import HeaderRight from '../HeaderRight'

// css
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <HeaderLeft />
      <HeaderRight />
    </header>
  )
}

export default Header