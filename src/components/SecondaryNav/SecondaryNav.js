import React from 'react'

// components
import SecondaryNavLeft from '../SecondaryNavLeft';
import SecondaryNavRight from '../SecondaryNavRight';

const SecondaryNav = () => {
  return (
    <div className='flex justify-between w-full'>
        <SecondaryNavLeft />
        <SecondaryNavRight />
    </div>
  )
}

export default SecondaryNav