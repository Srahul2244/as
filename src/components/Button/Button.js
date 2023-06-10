import React from 'react'

const Button = ({ id, label, onClick, activeId }) => {
    const selected = activeId === id;
    const className = selected 
    ? 'bg-[#7166F9] px-9 items-center py-4 rounded-[32px] text-[#F6F6FB]'
    :'bg-[#F6F6FB] px-7 items-center py-4 rounded-[32px] text-[#2B2F42] text-[14px] font-bold'

  return (
    <button className={className}  onClick={() => onClick(id)}>
        {label}
    </button>
  )
}

export default Button