import React, { useState, useEffect } from 'react'

// components
import Button from '../Button'


const SecondaryNavRight = () => {
  const buttons = [
    { id: '30_days', label: "30 days", active: true },
    { id: '90_days', label: "90 days", active: false },
    { id: '6_months', label: "6 months", active: false },
    { id: '9_months', label: "9 months", active: false },
  ]

  const [activeButton, setActiveButton] = useState(buttons[0]?.id)

  const handleActiveButton = (id) => {
    setActiveButton(id)
  }

  return (
    <div className='flex gap-2 items-center'>
      {buttons.map(button => <Button {...button} onClick={handleActiveButton} activeId={activeButton} />)}
    </div>
  )
}

export default SecondaryNavRight