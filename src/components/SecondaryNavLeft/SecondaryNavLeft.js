import React from 'react'
// images
import ques_mark from "../../assest/ques-mark.svg"

// 
import "./secondaryNavLeft.css"

const SecondaryNavLeft = () => {
  return (
    <div className='dashboard-left'>
      <h6 className='dashboard-header'>Project statistic</h6>
      <img className="dashboard_quest"src={ques_mark} alt='plus'  />
  </div>
  )
}

export default SecondaryNavLeft